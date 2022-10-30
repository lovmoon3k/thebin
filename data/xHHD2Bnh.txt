from typing import Dict
import csv
from pathlib import Path

from employee_class import Employee
from password_func import generate_password


def save_employees(filename: Path, employees: Dict[str, Employee]):
    """ save dictionary of Employee records to a CSV file """
    if employees:  # check there's data to save, assume the data is valid
        with filename.open('w') as file:  # open file (new or overwrite)
            writer = csv.writer(file)  # writing in csv format
            for employee in employees.values():  # retrieve each Employee record
                writer.writerow(employee.row())  # convert record to list of fields for CSV and write


def read_employees(filename: Path):
    """ read Employee records from CSV into dictionary of Employee records"""
    employees: Dict[str, Employee] = {}  # start with empty dictionary
    if filename.is_file():  # make sure there is a file, lets assume we can read it
        with filename.open() as file:
            reader = csv.reader(file)
            for idx, row in enumerate(reader):  # need a row number for error reporting
                try:  # attempt to convert row from csv data into an Employee record
                    new_employee = Employee(*row)
                except TypeError:  # probably too few/many fields on the row
                    print(f'Bad Record - row {idx}: {row}')
                except ValueError as err:  # probably failed check there is a number for salary
                    print(f'Bad Record - row {idx}: {row}')
                    print(err)
                else:  # add new Employee record to dictionary if not duplicate name
                    if not add_employee(new_employee, employees):
                        print(f'Duplicate Name - row {idx}: {row}')

    return employees  # dictionary of Employee records


def add_employee(new_employee: Employee, employees: Dict[str, Employee]):
    key = new_employee.key()  # generate unique key for potential new employee
    if key in employees:  # check key is unique, if not retain False
        return False
    employees[key] = new_employee  # otherwise add employee to dictionary of Employee records
    return True  # and return True to indicate new employee was added succesfully


def report(employees: Dict[str, Employee], report_header: str = "\n\nEmployees:\n", report_footer: str = ""):
    """ print details of all Employee records in dictionary """
    print(report_header)
    for employee in employees.values():
        print()
        print(employee)
    print(report_footer)


filename = Path('employees.csv')

employees = read_employees(filename)  # see if we have employee data filed already
if employees:
    report(employees, "\nEmployee details read from file:\n")

# lets try to add some additional employees
new_emps = (Employee('Fred', "Bloggs", "William", "S5", 23_000, "Junior Chef"),
            Employee('Barry', "Smoth", "", "S6", 18_000, "Washer"),
            Employee('Alpha', "Beta", "Charlie", "S2", 43_000, "CFO", generate_password()),
            )

for employee in new_emps:
    if add_employee(employee, employees):
        print('\nAdded employee, ', employee)
    else:
        print('\nEmployee already on file - details not changed')
        print(employee)

save_employees(filename, employees)
report(employees, '\n\nSaved to file Employee Details:\n')
