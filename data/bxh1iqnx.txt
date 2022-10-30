from dataclasses import dataclass

from password_func import DEFAULT_PASSWORD, hash_password, password_bad


@dataclass
class Employee:
    first: str
    last: str
    other: str
    grade: str
    salary: int
    position: str = ""
    password: str = DEFAULT_PASSWORD

    def __post_init__(self):  # just validating salary
        if not isinstance(self.salary, int):
            try:
                self.salary = int(self.salary)
            except ValueError:
                raise ValueError('Salary was not a number')
        self.password = hash_password(self.password)

    def __str__(self):  # for printing a record
        bad_password = password_bad(self.password)
        return (f"Employee: {self.last}, {self.first}.\n"
                f"\tGrade: {self.grade}, Position: {self.position}\n"
                f"\tSalary: £{self.salary}"
                f"\tDefault/empty/bad password: {bad_password}"
                )

    def __repr__(self):  # for saving to csv format
        return f"{self.first},{self.last},{self.other},{self.grade},{self.salary},{self.position},{self.password}"

    def row(self):  # convert string of employee record to list for csv
        return repr(self).split(',')

    def key(self):
        """create a unique key for each employee based on all name fields """
        return f"{self.last}_{self.first}_{self.other}".casefold()
