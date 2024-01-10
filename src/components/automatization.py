import pyautogui
from time import sleep
import pandas

pyautogui.click(x=614, y=737)
sleep(3)

pyautogui.click(x=403, y=53)
pyautogui.write('http://localhost:3000/')
pyautogui.press('enter')

sleep(3)

bd = pandas.read_csv('BD.csv')

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

pyautogui.press('win')
sleep(1)
pyautogui.write('Bloco de Notas')
sleep(2)
pyautogui.press('enter')
sleep(1)
pyautogui.write('feito chefe!')