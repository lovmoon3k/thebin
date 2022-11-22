from matplotlib.colors import Colormap
from  matplotlib import colormaps

class CyclicColormap(Colormap):
    def __init__(self, name: str, v_min=0.0, v_max=1.0, n: int = 256):
        self._colormap = colormaps.get_cmap(name).resampled(lutsize=n)
        self._v_min = v_min
        self._v_max = v_max
        super(CyclicColormap, self).__init__(
            name=f'cyclic_{name}', N=n
        )

    def get_range(self):
        return {'v_min': self._v_min, 'v_max': self._v_max}

    def set_range(self, v_min=None, v_max=None):
        if v_min is not None:
            self._v_min = v_min
        if v_max is not None:
            self._v_max = v_max

    def reversed(self, name=None):
        return CyclicColormap(name=f"{self._colormap.name}_r", n=self.N)

    def get_bad(self):
        return self._colormap.get_bad()

    def set_bad(self, color='k', alpha=None):
        self._colormap.set_bad(color=color, alpha=alpha)

    def get_under(self):
        return self._colormap.get_under()

    def set_under(self, color='k', alpha=None):
        self._colormap.set_under(color=color, alpha=alpha)

    def get_over(self):
        return self._colormap.get_over()

    def set_over(self, color='k', alpha=None):
        self._colormap.set_over(color=color, alpha=alpha)

    def is_gray(self):
        return self._colormap.is_gray()

    def resampled(self, lut_size):
        self._colormap = self._colormap.resampled(lutsize=lut_size)
        self.N = self._colormap.N

    def set_extremes(self, *, bad=None, under=None, over=None):
        self._colormap.set_extremes(bad=bad, under=under, over=over)

    def with_extremes(self, *, bad=None, under=None, over=None):
        new_cm = self.copy()
        new_cm.set_extremes(bad=bad, under=under, over=over)
        return new_cm

    def __call__(self, x, alpha=None, bytes=False):
        x = ((x - self._v_min) / (self._v_max - self._v_min)) % 1
        return self._colormap(x, alpha, bytes)

## Usage
# cm = CyclicColormap('jet', 0, 360)
# plt.plot(..., cmap=cm)