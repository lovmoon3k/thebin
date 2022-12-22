#include <stdio.h>
#include <stdlib.h>


int main() {

    int a = 11;

    while ( a < 10 )
    {
        printf("loop1\n");
        a++;
    }

    do
    {
        printf("loop2\n");
        a++;
    }
    while ( a < 10 );
    

    return 0;
}

/*
output:

loop2

*/