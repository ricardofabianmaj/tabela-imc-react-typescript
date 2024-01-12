# At this arquive i did a data base (database.csv) and i did implement it at the web site with an automatizated python logic...
# First you have to make sure that your browser is fullscreen
# Second you have to put your browser's name at the line 13
# So you have to make your that the React aplication is active in https://localhost:3000/
# So close your browser and get start the python's arquive

import pyautogui
from time import sleep
import pandas

pyautogui.press('win')
sleep(2)
pyautogui.write('Microsoft Edge') # Put your browser's name here
sleep(1)
pyautogui.press('enter')
sleep(3)

pyautogui.click(x=403, y=53)
pyautogui.write('http://localhost:3000/')
pyautogui.press('enter')

sleep(3)

bd = pandas.read_csv('database.csv')

for linha in bd.index:
    pyautogui.press('pagedown')

    pyautogui.click(x=623, y=498)

    # Adicionar Nome
    pyautogui.hotkey('ctrl', 'a')
    pyautogui.press('delete')
    pyautogui.write(str(bd.loc[linha, "Nome"]))
    pyautogui.press('tab')

    # Adicionar Peso
    pyautogui.hotkey('ctrl', 'a')
    pyautogui.press('delete')
    pyautogui.write(str(bd.loc[linha, "Peso"]))
    pyautogui.press('tab')

    # Adicionar Altura
    pyautogui.hotkey('ctrl', 'a')
    pyautogui.press('delete')
    pyautogui.write(str(bd.loc[linha, "Altura"]))
    pyautogui.press('tab')

    # Adicionar Gordura Corporal
    pyautogui.hotkey('ctrl', 'a')
    pyautogui.press('delete')
    pyautogui.write(str(bd.loc[linha, "Gordura_Corporal"]))
    pyautogui.press('tab')
    pyautogui.press('enter')