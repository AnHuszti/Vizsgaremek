## **1. Az alkalmazás célja**
​
- Az alkalmazás feladata, hogy egy óvodaközpont adatait nyilvántartsa és kezelje.
​
## **2. Az alkalmazás telepítése**
​
- Az alábbi linken elérhető GitHub repository tartalmát kell forkolni: 
https://github.com/AnHuszti/Vizsgaremek
- A célgépre le kell klónozni az adott GitHub repository tartalmát az ott elérhető kód kimásolásával:
A VisualStudioCode alkalmazásban terminált megnyitva a kívánt mappába kell belépni, majd a 
`git clone https://github.com/AnHuszti/Vizsgaremek.git`
paranccsal kell leklónozni az alkalmazást.
- Telepíteni kell az alkalmazás függőségeit: 
Ehhez be kell lépni a backend mappába: `cd Vizsgaremek/BACKEND`.
Majd a `code . -r` parancs az alkalmazás gyökerévé kell tennia mappát. Ezután telepíthetők a backend függőségei `npm i` paranccsal. 
Ugyanezt a frontend mappában is végrehajtjuk - ehhez új VSCode ablakot nyitunk, ahol ezúttal a frontend mappába lépünk be: `cd Vizsgaremek\FRONTEND`.
A `code . -r`, majd az `npm i` parancsok futtatása következik.  
- Ha még nincsen fenn a célgépen, akkor telepíteni kell az Angular keretrendszert az `npm i -g @angular/cli` paranccsal.
- A terminálban ki kell adni az `ng build` parancsot   
- A /frontend/dist/frontend mappa tartalmát be kell másolni a /backend/public mappába   
- A terminálon be kell lépni a /backend mappába és futtatni az `npm run build` parancsot 
​
## **3. Az alkalmazás konfigurálása**
​
Pl.:
A /frontend/environments mappában már be van állítva az API-végpont elérési útvonala: 
  - _environment.ts_ állomány: http://localhost:3000/  
  - _environment.prod.ts_ állomány: http://localhost:3000/ 
​
## **4. Az alkalmazás indítása**
​
Pl.:
A megadott Docker container indítása és inicializálása:
- El kell indítani a Docker Desktop alkalmazást
- A /BACKEND mappába belépve a terminálban ki kell adni az `npm run dev` parancsot  
- a /FRONTEND mappába belépve a terminálban az `npm start` paranccsal indítható a frontend
​
_Megjegyzés_:  
A belépéshez egy érvényes e-mail-cím és jelszó páros:  
​
E-mail | Jelszó
admin@minta.com | lkasadji
user@minta.com | ahfimmo
​
## **5. A végpontok dokumentációja**
​
Swagger 
- Az alábbi URL-t kell beírni a böngészőbe: https://localhost:3000/api-docs
​
A többi végpont a https://localhost:4200 linken található alkalmazásból elérhető a megfelelő gombokra / menüpontokra kattintással:
- Login: Bejelentkezés gombra kattintva
- Logout: Kijelentkezés gombra kattintva
- Tagóvodák, Alkalmazottak, Csoportok, Gyerekek, Kölnórák, Felhasználók: A baloldali Sidebaron található menüből
- Minden kategória szerkesztőoldalát az adott kategória táblázatában található szerkesztő gombokra kattintva ill. a táblázatt feletti "új ..." gombra kattintva érjük el.
​

---
---
​
## **Linkek:**  
​
User Story:
https://github.com/AnHuszti/Vizsgaremek#readme
​
​
