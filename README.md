<h1>Aplicatie de chat realizata cu ajutorul tehnologiilor MERN (aplicatie imbunatatita)</h1>


**BACKEND(Express.js, Node.js,MongoDB)**
-	 sistem complet de autentificare. Am creat o functie intr-un fisier separat pentru generare jsonwebtoken si setare in cookie.  Aceasta functie a fost apelata in controller la signup si login. 
-	La signup am  folosit biblioteca bcrypt pentru a genera un salt de 10 si hashing parola .Ulterior am stocat-o  criptata in baza de date. La login am folosit tot bcrypt pentru a putea compara parola introdusa de user cu cea din baza de date.
-	La logout se sterge tot ce este in cookie si se da maxAge de 0. 
-	Inainte de fiecare actiune, cererea trece printr-un middleware de autorizare unde se verifica existenta si se valideaza tokenul din cookie. Daca totul este in regula,  variabila decoded stocheaza informatia extrasa din cookie , adica payload-ul cu id-ul. Cu ajutorul acestuia am cautat in baza de date userul si adaugat in req.user cu care trece mai departe la functionalitate.
-	Pentru a putea gestiona si stoca imaginile am folosit Cloudinary


**FRONTEND(React.js,Tailwind CSS,Daisy UI,Zustand Context)**
-	Zustand Context care ne ajuta cu starea globala, pentru a putea declara starea intr-un loc si a o folosi in ce componente era necesar.
-	Am folosit framework-ul CSS Tailwind CSS pentru stilizare si biblioteca Daisy UI pentru a avea acces la componente build-in. 
-	Am folosit biblioteca axios pentru a prelua functionalitatile de pe backend
-	In folderul store am customizat hook-uri pentru autentificare si mesaje in care am declarat starea cu ajutorul Zustand Context si am facut legatura cu backendul prin axios.
-	Pentru comunicarea in timp real am folosit biblioteca Socket.IO , am creat un websocket server peste serverul express pentru a putea avea aceasta comunicare bidirectionala fara a fi nevoie de a mai da refresh paginii. Cu ajutorul acestei biblioteci am putut avea si functionalitatea de online status.


 

Interfata pentru login:
![image](https://github.com/user-attachments/assets/e74c5863-b3f9-478f-8221-c53c92047dc4)

Interfata signup:
![image](https://github.com/user-attachments/assets/e3d94c42-9348-4189-a83a-5c8a15b89588)

Interfata Home:
![image](https://github.com/user-attachments/assets/1c864c4b-dd88-4926-8183-9118038b003a)

In partea din dreapta sus sunt butoanele Settings si Profile:
Settings: de aici putem alege o tema dupa preferinte (cu ajutorul Daisy UI)
![image](https://github.com/user-attachments/assets/6b7849a1-da54-4f13-a837-8970c6b36d5d)

Profile: aici sunt datele utilizatorului logat
![image](https://github.com/user-attachments/assets/6139dd83-d561-4653-b495-c598c408a8e4)

Mesajele intre utilizatori, avem si online status:
![image](https://github.com/user-attachments/assets/4d65d375-6052-4f9b-9fc0-c956c095f5d0)

Atunci cand Daiana s-a deconectat , apasand butonul de logout , nu va mai aparea online
![image](https://github.com/user-attachments/assets/fcdac543-2774-4f89-beed-cd7a68caf8fa)




