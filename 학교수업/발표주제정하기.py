import random

MAX_NUM = 20
STD_INFO = ['김대웅', '김도희', '김동현', '김세준', '김초연',
            '민준혁', '배길준', '백서영', '서민준', '손영웅',
            '손정우', '신두평', '심준호', '심형선', '유시온',
            '이수필', '이진혁', '정우영', '최승교', '황민구']
LST = ['선택정렬', '삽입정렬', '병합정렬', '퀵정렬', '버블정렬',
       '해시', '스택', '큐', '힙', '탐욕(그리디)',
       '그래프', '동적계획(DP)', '이분탐색', '완적탐색(BF)', '너비우선탐색(BFS)',
       '깊이우선탐색(DFS)']
StudentList = []


class Student:
    def __init__(self, stdNum, stdName='None'):
        self.stdNum = stdNum
        self.stdName = stdName
        self.subjects = []

    def setSubjects(self, subject):
        self.subjects.append(subject)

    def canSetSubjects(self, subject):
        if subject not in self.subjects:
            return True
        return False

    def printSubjects(self):
        print(f"{self.stdNum} {self.stdName} : {'{'} ", end="")
        for sub in self.subjects:
            print(sub, end=" ")
        print("} ")


def initStudent():
    for num in range(1, 21, 1):
        StudentList.append(Student(num, STD_INFO[num-1]))


def showAllStudents():
    for idx in range(20):
        StudentList[idx].printSubjects()


def setRandomList():
    cnt = 0
    nList = []

    while cnt < MAX_NUM:
        randNum = int(random.random() * len(LST))

        if len(nList) == len(LST):
            nList = []

        if randNum not in nList and StudentList[cnt].canSetSubjects(LST[randNum]):
            nList.append(randNum)
            StudentList[cnt].setSubjects(LST[randNum])
            cnt += 1


initStudent()

for _ in range(4):
    setRandomList()

showAllStudents()
