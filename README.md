# **User Story - Adminisztrátori szerepkör**

## **Óvodai nyilvántartó**
---

## **1. Főoldal**
---

**1. agilis felhasználói történet:**
> _A főoldal egy üdvözlő képernyő az óvoda központ legfontosabb adataival, aktuális évre vonatkozó statisztikákkal._

**Elfogadási kritérium:**  

Egy mobiloptimalizált, látványos felületen az óvoda központ lefontontosabb adatai olvashatók (Név, telephelyek, aktuális dolgozói létszám, aktuális gyerek létszám, illusztráció). A főoldalon megjelenő menüből lehet navigálni az aloldalakra.

---

## **2. Tagóvodák adatbázisa**
---

**1. agilis felhasználói történet:**
> _Egy helyen olvashatók a tagóvodák fő adatai._


**Elfogadási kritérium:**  
Az oldalra navigálva megjelennek a telephelyek adatai.  
Az adatok: telephely neve, telephely címe, alkalmazottak száma, férőhelyek száma, aktuális gyerek létszám. Kártyás nézetben kép is feltüntethető.

**Megjegyzések:**


1# szcenárió | 2# szcenárió
------------ | -------------
A Telephelyek / Tagóvodák menüpontra kattintással megjelenik az összes telephely adata lista formátumban egy helyen. | A Telephelyek / Tagóvodák menüpontra való kattintással megjelenik az összes telephely adata kártyás formátumban egy helyen. 

---
**2. agilis felhasználói történet:**

> _Új tagóvoda adatai vehetők fel._

**Elfogadási kritérium:**  
- A kötelező adatok megadásával egy új tagóvoda adatait lehet felvinni, a módosítás megjelenik a listázó oldalon, létrejön az tagóvoda adatlapja.
- Az oldalon lehetőség van visszanavigálni az összes tagóvodát listázó oldalra.
---

**3. agilis felhasználói történet:**

> _A tagóvoda adatai szerkeszthetők._

**Elfogadási kritérium:**  
- A tagóvodára kattintva a választott óvoda adatait lehet szerkeszteni, a módosítás megjelenik a listázó oldalon és a részletes adatlapon is.
- Az oldalon lehetőség van visszanavigálni az összes tagóvodát listázó oldalra.
---

**4. agilis felhasználói történet:**

> _A tagóvoda törölhető._

**Elfogadási kritérium:**  
- A tagóvoda kiválasztásával törölhető a rekord.
- A törlést követően frissül a listaoldal, ahol a már törölt óvoda nem látható.

---

## _**3. Alkalmazottak adatbázisa**_
---

**1. agilis felhasználói történet:**
> _Egy helyen olvashatók a pedagógusok, pedagógus munkáját segítő alkalmazottak adatai._


**Elfogadási kritérium:**  
Az oldalra navigálva megjelennek az összes a pedagógus és pedagógus munkáját segítő alkalmazott adatai. 
Az adatok: név, munkakör(óvópedagógus, dajka, pedagógiai asszisztens, egyéb oktató, fejlesztő szakember), hozzárendelt csoport (ha van), egyéb kompetenciák (elsősegélynyújtás, nyelvimeret, művészeti képzettség…), kép.

**Megjegyzések:**

1# szcenárió | 2# szcenárió
------------ | -------------
Az Alkalmazottak menüpontra kattintással megjelennek az alkalmazottak adatai lista formátumban egy helyen. | Az Alkalmazottak menüpontra való kattintással megjelennek az alkalmazottak adatai kártyás formátumban egy helyen. 

---
**2. agilis felhasználói történet:**

> _Új alkalmazott adatai vehetők fel._

**Elfogadási kritérium:**  
- A kötelező adatok megadásával egy új alkalmazott adatait lehet felvinni, a módosítás megjelenik a listázó oldalon, létrejön az alkalmazott adatlapja.
- Az oldalon lehetőség van visszanavigálni az összes alkalmazottat listázó oldalra.
---

**3. agilis felhasználói történet:**

> _Az alkalmazott adatai szerkeszthetők._

**Elfogadási kritérium:**  
- Az alkalmazottra kattintva a választott személy adatait lehet szerkeszteni, a módosítás megjelenik a listázó oldalon és a személyes adatlapon is.
- Az oldalon lehetőség van visszanavigálni az összes alkalmazottat listázó oldalra.
---

**4. agilis felhasználói történet:**

> _Az alkalmazott törölhető._

**Elfogadási kritérium:**  
- Az alkalmazott kiválasztásával törölhető a rekord.
- A törlést követően frissül a listaoldal, ahol a már törölt személy nem látható.

---

**5. agilis felhasználói történet:**

> _Az alkalmazottak munkakörök / kategóriák szerint listázhatók_

**Elfogadási kritérium:**  
A kategória kiválasztásával frissül a listaoldal, ahol csak a szűrt adatok láthatók.

---

**6. agilis felhasználói történet:**

> _Bármilyen kulcsszóra lehet keresni egy választott kategórián belül._

**Elfogadási kritérium:**  
A kategória kiválasztásával és a kulcsszónak megfelelően frissül a listaoldal, ahol csak a szűrt adatok láthatók.

---

**7. agilis felhasználói történet:**

> _Kategóriák szerint sorba rendezhetők az alkalmazottak._

**Elfogadási kritérium:**  
- A szám típusú adatok alapján növekvő és csökkenő sorrendbe lehet rendezni.
- A szöveges adatok alapján abc-szerinti és fordított sorrendbe lehet rendezni.

---

**8. agilis felhasználói történet:**

> _Az alkalmazottakat listázó oldal lapozható._

**Elfogadási kritérium:**  
- A lapozó egyes oldalainak kiválasztásával az ott felsorolt alkalmazottak láthatóak.
- Az alkalmazottakat felsoroló előző és következő oldalakra is lehet navigálni.

---


## _**4. Az óvodai csoportok adatbázisa**_
---

**1. agilis felhasználói történet:**

> _A csoportokat listázó aloldalon megjelennek a csoportok legfontosabb adatai._

**Elfogadási kritérium:**  
Az aktuális tanév csoportjainak fő adatait jeleníti meg lista formátumban. Az adatok a következők: név, telephely, óvópedagógus, dajka, maximális létszám, aktuális létszám, korcsoport, terem

---

**2. agilis felhasználói történet:**

> _Kategóriák szerint sorba rendezhetők a csoportok._

**Elfogadási kritérium:**  
- A szám típusú adatok alapján növekvő és csökkenő sorrendbe lehet rendezni a rekordokat.
- A szöveges adatok alapján abc-szerinti és fordított sorrendbe lehet rendezni a rekordokat.

---

**3. agilis felhasználói történet:**

> _Új csoport adatai vehetők fel._

**Elfogadási kritérium:**  
- A kötelező adatok megadásával új csoportot lehet felvinni, a módosítás megjelenik a listázó oldalon, létrejön a csoport adatlapja.
- Az oldalon lehetőség van az összes csoportot listázó oldalra visszanavigálni.

---

**4. agilis felhasználói történet:**

> _Kiválasztott csoport adatai szerkeszthetők._

**Elfogadási kritérium:**  
- A csoportra kattintva a választott csoport adatait lehet szerkeszteni, a módosítás megjelenik a listázó oldalon és a csoport adatlapján is.
- Az oldalon lehetőség van az összes csoportot listázó oldalra visszanavigálni.

---

**5. agilis felhasználói történet:**

> _A csoport törölhető._

**Elfogadási kritérium:**  
- A csoport kiválasztásával a rekord törölhető.
- A törlést követően frissül a listaoldal, ahol a törölt csoport már nem látható.

---

## _**5. Adott évben az óvodába járó gyerekek adatbázisa**_
---

**1. agilis felhasználói történet:**

> _A gyerekeket listázó aloldalon megjelennek a gyerekek legfontosabb adatai._

**Elfogadási kritérium:**  
Az aktuális tanévben az óvodába járó gyerekek fő adatait jeleníti meg lista formátumban. Az adatok a következők: név, kor, csoport, jel, szülők neve, szülők elérhetősége
---

**2. agilis felhasználói történet:**

> _Kategóriák szerint sorba rendezhetők a gyerekek._

**Elfogadási kritérium:**  
- A szám típusú adatok alapján növekvő és csökkenő sorrendbe lehet rendezni a rekordokat.
- A szöveges adatok alapján abc-szerinti és fordított sorrendbe lehet rendezni a rekordokat.

---

**3. agilis felhasználói történet:**

> _Új gyerek adatai vehetők fel._

**Elfogadási kritérium:**  
- A kötelező adatok megadásával új gyereket lehet felvinni, a módosítás megjelenik a listázó oldalon, létrejön a gyerek adatlapja.
- Az oldalon lehetőség van az összes gyereket listázó oldalra visszanavigálni.

---

**4. agilis felhasználói történet:**

> _Kiválasztott gyerek adatai szerkeszthetők._

**Elfogadási kritérium:**  
- A gyerekre kattintva a választott gyerek adatait lehet szerkeszteni, a módosítás megjelenik a listázó oldalon és a gyerek adatlapján is.
- Az oldalon lehetőség van az összes gyereket listázó oldalra visszanavigálni.

---

**5. agilis felhasználói történet:**

> _A gyerek törölhető._

**Elfogadási kritérium:**  
- A gyerek kiválasztásával a rekord törölhető.
- A törlést követően frissül a listaoldal, ahol a törölt gyerek adatai már nem láthatók.

---

**6. agilis felhasználói történet:**

> _A felvett adatok helyességének ellenőrzése automatikusan megtörténik._

**Elfogadási kritérium:**  
- Hibaüzenet jelzi, amennyiben nem megfelelő a formátum.
- A hibaüzenet tartalmazza azt, hogy mi a megfelelő formátum.

---


## _**6. Különórák aloldala**_
---

**1. agilis felhasználói történet:**

> _Az összes különórák fő adatai egy listában jelennek meg._

**Elfogadási kritérium:**  
Az aloldal megjeleníti az összes különóra fő adatait lista formátumban. A fő adatok a következők: név, típus, szint, telephely, időpont, oktató, maximális létszám, aktuális létszám, ár. 

---

**2. agilis felhasználói történet:**

> _Új különóra adatai vehetők fel._

**Elfogadási kritérium:**  
- A kötelező adatok megadásával egy új különóra adatait lehet felvinni, a módosítás megjelenik a listázó oldalon, létrejön a különóra adatlapja.
- Az oldalon lehetőség van arra, hogy az összes különórát listázó oldalra navigáljon vissza az alkalmazás.

---

**3. agilis felhasználói történet:**

> _A különóra adatai szerkeszthetők._

**Elfogadási kritérium:**  
- A különórára kattintva a választott óra adatait lehet szerkeszteni, a módosítás megjelenik a listázó oldalon és a különóra adatlapján is
- Az oldalon lehetőség van arra, hogy az összes különórát listázó oldalra navigáljon vissza az alkalmazás.

---

**4. agilis felhasználói történet:**

> _A különóra törölhető._

**Elfogadási kritérium:**  
- A különórára kattintva a rekord törölhető.
- A törlést követően frissül a listaoldal, ahol a már törölt rekord nem található.

---

**5. agilis felhasználói történet:**

> _A rekordok kategóriák szerint listázhatók._

**Elfogadási kritérium:**  
A kategória kiválasztásával frissül a listaoldal, ahol csak a szűrt adatok láthatók.

---

**6. agilis felhasználói történet:**

> _Kategóriák szerint sorba rendezhetők a különórák._

**Elfogadási kritérium:**  
- A szám típusú adatok alapján növekvő és csökkenő sorrendbe lehet rendezni a rekordokat.
- A szöveges adatok alapján abc-szerinti és fordított sorrendbe lehet rendezni a rekordokat.

---

**7. agilis felhasználói történet:**

> _A rekordokat felsoroló oldal lapozható._

**Elfogadási kritérium:**  
- A lapozó egyes oldalainak kiválasztásával az ott felsorolt rekordok láthatóak.
- A rekordokat felsoroló előző és következő oldalakra is lehet navigálni.

---

## _**7. Bejelentkezési felület**_
---

**1. agilis felhasználói történet:**
> _Az adminisztrációs felületre be lehet jelentkezni._

**Elfogadási kritérium:**  

- Az azonosító adatok megadásával be lehet jelentkezni a felületre.
- A profil nélküli felhasználóknak lehetőségük van regisztrálni, hogy ezt követően bejelentkezhessenek.

---

## _A projekt egyéb adatai:_

**Prioritás:**  
magas

**Megvalósítás időtartama:**  
5 hét

**További fejlesztési lehetőségek:**  
- Hibaüzenetek megjelenítése (validálás).
- A főoldalon statisztikák elhelyezése.
- Az egyes aloldalakon statisztikák, kimutatások készítése a legfontosabb adatokból.
- Az aloldalak lista nézete mellett kártya nézet kialakítása.
- Eseményeket tartalmazó aloldal létrehozása

---

## **Linkek:**  

- [A dokumentáció itt érhető el.](https://github.com/AnHuszti/Vizsgaremek/blob/main/README.md)


