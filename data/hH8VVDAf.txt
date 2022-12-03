from tkinter import *
import time
clk = Tk()
clk.title("Clock")
clk.geometry("1330x700+0+0")
clk.config(bg="red")


def Clock():
    hr = str(time.strftime("%H"))
    mn = str(time.strftime("%M"))
    sc = str(time.strftime("%S"))

    if int(hr) > 12 and int(mn) > 0:  # to conveted AM TO PM
        lb_dn.config(text="PM")
    if int(hr) > 12:
        hr = str(int(int(hr)-12))

    lb_hr.config(text=hr)
    lb_mn.config(text=mn)
    lb_sc.config(text=sc)

    lb_hr.after(200, Clock)  # TO MAKE CLOCK UPDATE EVERY SECOND


# for hour code
lb_hr = Label(clk, text="12", font=(
    "Time 20 bold", 75, "bold"), bg="green", fg="white")
lb_hr.place(x=350, y=250, width=150, height=150)

lb_hr_txt = Label(clk, text="HOUR", font=(
    "Time 20 bold", 20, "bold"), bg="green", fg="white")
lb_hr_txt.place(x=350, y=410, width=150, height=50)


# for minute code
lb_mn = Label(clk, text="12", font=(
    "Time 20 bold", 75, "bold"), bg="black", fg="white")
lb_mn.place(x=520, y=250, width=150, height=150)

lb_mn_txt = Label(clk, text="MINUTE", font=(
    "Time 20 bold", 20, "bold"), bg="black", fg="white")
lb_mn_txt.place(x=520, y=410, width=150, height=50)


#  for minute
lb_sc = Label(clk, text="12", font=(
    "Time 20 bold", 75, "bold"), bg="blue", fg="white")
lb_sc.place(x=690, y=250, width=150, height=150)

lb_sc_txt = Label(clk, text="SECOND", font=(
    "Time 20 bold", 20, "bold"), bg="blue", fg="white")
lb_sc_txt.place(x=690, y=410, width=150, height=50)


#  FOR DAY
lb_dn = Label(clk, text="AM", font=(
    "Time 20 bold", 65, "bold"), bg="#9F0649", fg="white")
lb_dn.place(x=860, y=250, width=150, height=150)

lb_dn_txt = Label(clk, text="NOON", font=(
    "Time 20 bold", 20, "bold"), bg="#9F0649", fg="white")
lb_dn_txt.place(x=860, y=410, width=150, height=50)

Clock()

clk.mainloop()