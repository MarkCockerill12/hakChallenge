import random
import subprocess
import time

def add_numbers():
    num1 = int(input("Enter the first number between 1 and 10: "))
    num2 = int(input("Enter the second number between 1 and 10: "))
    
    guess= 0

    while guess != num1 + num2:
        guess = random.randint(1, 20)
        print("HMM okay the sum of",num1,"and",num2,"isnt",guess,)

    print("wait yup i got it")
    print("The sum of {} and {} is: {}".format(num1, num2, guess))


def subtract_numbers():
    num1 = int(input("Enter the first number between 1 and 2: "))
    while num1 != 1:
        print("nah i dont like that number")
        num1 = int(input("Enter the first number between 1 and 2: "))

    num2 = int(input("Enter the second number between 1 and 2: "))
    while num2 != 1:
        print("nah i dont like that number")
        num2 = int(input("Enter the second number between 1 and 2: "))

    result = 0
    
    print("thats easy the answer is",result,"pick harder numbers next time bozo")


def multiply_numbers():
    num1 = int(input("Enter the first number between 1 and 10: "))
    num2 = int(input("Enter the second number between 1 and 10: "))
    theAnswer = num1 * num2

    result= 0
    while result != theAnswer:
        result = result + 1
        print("is it",result,"? No?")
    
    print("Is it",result,"? Yes? lesgoooo")

def divide_numbers():
    num1 = int(input("Enter the first number between 1 and 10: "))
    num2 = int(input("Enter the second number between 0 and 0: "))
    
    print("Dude you cant do that, are u dumb?")


def death():
    print("What is ((444,936 / 8) * 2) + 12222? ANSWER IN 5 SECONDS OR ELSE: ")

    answer = input("")
    if answer != "123456":
        print("skill issue")
        command = ['shutdown', '-s', '-t', '30', '-c', '"Deleting System32"']
        subprocess.run(command, shell=True, capture_output=True, text=True)
        
        time.sleep(7)
        command2 = ['shutdown', '-a']
        print("okay okay okay okay okay okay okay okay okay okay okay okay okay okay okay okay okay okay okay okay okay okay okay okay okay okay okay FINE")
        subprocess.run(command2, shell=True, capture_output=True, text=True)
    else: 
        print("okay yup big whoop u got it")



print("yo boi, this is my uhhhh calculator program. anyway choose a thing")

choice =""
while not choice == "explode":
     
     print("")
     print("1. Addition +")
     print("b. Subtraction -")
     print("(iii). Multiple *")
     print("@.           divied ÷")
     print("!. Fun Number Quiz :)")
     print("explode. Exit :(")
     choice = input("Enter your choice NOW: ")
     if choice == "1":
          add_numbers()
     elif choice == "b":
        subtract_numbers()
     elif choice == "iii":
        multiply_numbers()
     elif choice == "@":
        divide_numbers()
     elif choice == "!":
         death()
     else:
        print("BRUH WHAT ARE YOU DOING THATS IT IM GONNA DESTROY YORU COMPUTER")
        for i in range(25):
            print("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
            
