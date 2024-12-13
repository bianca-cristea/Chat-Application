<h1>Aplicatie de chat realizata cu ajutorul tehnologiilor MERN (aplicatie imbunatatita)</h1>

Pentru partea de frontend am folosit:
-React.js , Zustand Context , Tailwind CSS, Daisy UI
Pentru partea de backend am folosit:
-Node.js, Express.js, MongoDB


**BACKEND:**
-Pentru autentificare am folosit jsonwebtoken. Am creat o functie intr-un fisier separat(folder utils), special pentru a genera un token jwt si a-l seta in cookie. 
Am dat maxAge de 5 zile si ca payload am pus userId.Payloadul va fi informatia scurta si unica ce va fi stocata in token.
-In functiile signup si login , in controller am generat tokenul si l-am setat in cookie, iar la logout , am sters informatia din cookie si i-am dat maxAge:0.
-La signup, am folosit biblioteca bcrypt pentru hashing parola inainte de a fi adusa in baza de date.
-Ulterior inainte de fiecare actiune am trecut cererea printr un middleware de autorizare pentru a verifica daca exista token ul si este valid.
-Pentru comunicarea in timp real am folosit biblioteca SocketIO. Am creat un websocket server peste cel express pentru a nu mai fi nevoie de refresh si a primi mesajele in timp real.
-pentru a putea gestiona si stoca imaginile am folosit Cloudinary


**FRONTEND:**
-pentru stilizare am folosit framework-ul CSS Tailwind CSS si Biblioteca Daisy UI pentru componente built-in
-Zustand Context a fost de ajutor pentru contextul global. Am declarat intr-un loc starea si am putut-o folosi din orice componenta.
-am folosit axios pentru a putea face conexiunea cu backendul.

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




