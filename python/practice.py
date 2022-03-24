import turtle
t = turtle.Pen()
t.shape("turtle")
t.penup()

t.goto(100,100)
t.write("거북이가 여기로 오면 2의 배수입니다.")

t.goto(100,0)
t.write("거북이가 여기로 오면 3의 배수입니다.")

t.goto(100,-100)
t.write("거북이가 여기로 오면 5의 배수입니다.")

t.goto(0,0)
t.pendown()

num = int(turtle.textinput("입력값", "숫자를 입력하세요."))
if(num%2 == 0):
    t.goto(100,100)
if(num%3 == 0):
    t.goto(100,0)
if(num%5 == 0):
    t.goto(100,-100)


print("123")