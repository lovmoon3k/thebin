Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
    ' Set up the timer to update the position of the point on the rolling circle
    Timer1.Interval = 10 ' Update the position every 10 milliseconds
    Timer1.Start()
End Sub

Private Sub Timer1_Tick(sender As Object, e As EventArgs) Handles Timer1.Tick
    ' Calculate the new position of the point on the rolling circle
    Dim r As Double = 100 ' Radius of the rolling circle
    Dim R As Double = 200 ' Radius of the fixed circle
    Dim d As Double = 50 ' Distance between the center of the rolling circle and the point
    Static theta As Double = 0 ' Angle of the rolling circle
    theta += 0.1 ' Increment the angle by a small amount at each timer tick
    Dim x As Double = (R + r) * Math.Cos(theta) - d * Math.Cos((R + r) * theta / r) ' X-coordinate of the point
    Dim y As Double = (R + r) * Math.Sin(theta) - d * Math.Sin((R + r) * theta / r) ' Y-coordinate of the point

    ' Clear the form and draw the epitrochoid
    Dim g As Graphics = Me.CreateGraphics()
    g.Clear(Color.White)
    g.DrawEllipse(Pens.Black, CSng(Me.Width / 2 - R), CSng(Me.Height / 2 - R), CSng(2 * R), CSng(2 * R)) ' Draw the fixed circle
    g.DrawEllipse(Pens.Black, CSng(x - r), CSng(y - r), CSng(2 * r), CSng(2 * r)) ' Draw the rolling circle
    g.DrawLine(Pens.Black, CSng(Me.Width / 2), CSng(Me.Height / 2), CSng(x), CSng(y)) ' Draw the line connecting the center of the fixed circle to the center of the rolling circle
    g.DrawEllipse(Pens.Red, CSng(x - 5), CSng(y - 5), 10, 10) ' Draw the point on the rolling circle
End Sub