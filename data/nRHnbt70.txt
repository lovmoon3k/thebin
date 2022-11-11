#define taskname "DESERT"
#include <iostream>
#include <cstdio>
#include <algorithm>
#include <cstdlib>
#include <vector>
#include <queue>
using namespace std;
const int maxN = 1e5;
using lli = long long;
const lli infty = 4e9 + 1;

struct TPoint
{
    int x, y;
    inline int SumXY() const
    {
        return x + y;
    }
};
using PPoint = TPoint*;

int n, m;
TPoint p[maxN];
PPoint pp[maxN];
int xarr[maxN];
PPoint tree[maxN + 1];
lli d[maxN];
int trace[maxN];
bool OutTree[maxN];

struct TPQNode
{
    int u;
    lli dlab;
    inline bool Valid() const
    {
        return dlab == d[u];
    }
    inline bool operator < (const TPQNode& other) const
    {
        return dlab > other.dlab;
    }
};

struct TEdge
{
    int u, v;
    inline lli Weight() const
    {
        return lli(abs(p[u].x - p[v].x)) + abs(p[u].y - p[v].y);
    }
};
using PEdge = TEdge*;
TEdge e[8 * maxN];
vector<PEdge> adj[maxN];

inline bool Minimize(lli& Target, lli Value)
{
    if (Value < Target)
    {
        Target = Value;
        return true;
    }
    return false;
}

void ReadInput()
{
    cin >> n;
    for (int i = 0; i < n; ++i)
    {
        cin >> p[i].x >> p[i].y;
        pp[i] = &p[i];
    }
    m = 0;
}

inline int XIdx(int x)
{
    return upper_bound(xarr, xarr + n, x) - xarr;
}

inline void Update(int pos, PPoint p)
{
    for (; pos <= n; pos += pos & -pos)
        if (tree[pos] == nullptr || tree[pos]->SumXY() < p->SumXY())
            tree[pos] = p;
        else
            break;
}

inline PPoint Query(int pos)
{
    PPoint res = nullptr;
    for (; pos > 0; pos &= pos - 1)
    {
        if (tree[pos] == nullptr) continue;
        if (res == nullptr || res->SumXY() < tree[pos]->SumXY())
            res = tree[pos];
    }
    return res;
}

void Sweepline()
{
    for (int i = 0; i < n; ++i)
        xarr[i] = p[i].x;
    sort(xarr, xarr + n);
    sort(pp, pp + n, [](PPoint p, PPoint q)
    {
        if (p->x - p->y != q->x - q->y)
            return p->x - p->y > q->x - q->y;
        else
            return p->x < q->x;
    });
    fill(tree + 1, tree + n + 1, nullptr);
    for (int i = 0; i < n; ++i)
    {
        int u = pp[i] - p;
        int pos = XIdx(pp[i]->x);
        PPoint q = Query(pos);
        if (q != nullptr)
        {
            int v = q - p;
            e[m++] = {u, v};
        }
        Update(pos, pp[i]);
    }
}

void Rot90()
{
    for (int i = 0; i < n; ++i)
    {
        int temp = p[i].x;
        p[i].x = -p[i].y;
        p[i].y = temp;
    }
}

void Mirror()
{
    for (int i = 0; i < n; ++i)
        p[i].x = -p[i].x;
}

void GetEdges()
{
    m = 0;
    for (int rot = 0; rot < 4; ++rot)
    {
        Sweepline();
        Rot90();
    }
    Mirror();
    for (int rot = 0; rot < 4; ++rot)
    {
        Sweepline();
        Rot90();
    }
}

void BuildAdjs()
{
    for (int i = 0; i < m; ++i)
    {
        adj[e[i].u].push_back(&e[i]);
        adj[e[i].v].push_back(&e[i]);
    }
}

void Prim()
{
    fill(trace, trace + n, -1);
    fill(OutTree, OutTree + n, true);
    fill(d, d + n, infty);
    d[n - 1] = 0;
    OutTree[n - 1] = false;
    priority_queue<TPQNode> PQ;
    PQ.push({n - 1, 0});
    while (true)
    {
        TPQNode Node = PQ.top();
        PQ.pop();
        if (!Node.Valid()) continue;
        int u = Node.u;
        if (u == 0) break;
        OutTree[u] = false;
        for (PEdge e: adj[u])
        {
            int v = e->u ^ e->v ^ u;
            if (!OutTree[v]) continue;
            if (Minimize(d[v], e->Weight()))
            {
                PQ.push({v, d[v]});
                trace[v] = u;
            }
        }
    }
}

void PrintResult()
{
    lli Volume = 0;
    for (int s = 0; s != n - 1; s = trace[s])
        if (d[s] > Volume) Volume = d[s];
    cout << Volume << '\n';
    for (int s = 0; s != n - 1; s = trace[s])
        cout << s + 1 << ' ';
    cout << n;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    freopen(taskname".INP", "r", stdin);
    freopen(taskname".OUT", "w", stdout);
    ReadInput();
    GetEdges();
    BuildAdjs();
    Prim();
    PrintResult();
}
