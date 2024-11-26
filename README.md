# Tugas 9 dan 10 Praktikum Mobile

Nama: Reyno Alfarez Marchelian </br>
NIM: H1D022111 </br>
Shift B

# Tugas 9
## Penjelasan Login

1. Saat login, aplikasi akan memanggil layanan Firebase Authentication yang memungkinkan user untuk login menggunakan Google Sign-In
2. User akan diarahkan ke pop-up halaman login akun Google, kemudian Firebase akan menerima token authentication dari Google yang akan divalidasi Firebase dan kemudian akan membuat authentication session untuk user yang baru saja login
3. User berhasil login dan akan di-redirect ke /home

## Penjelasan Tampilan Data User

Data akun Google user (username, email, dan foto profile) akan ditampilkan pada halaman /profile menggunakan kode-kode berikut yang terdapat pada file ```ProfilePage.vue```

1. Profile Picture
```
<div id="avatar-container">
  <ion-avatar>
    <img
      alt="Avatar"
      v-if="user?.photoURL"
      :src="user.photoURL"
      @error="handleImageError"
    />
  </ion-avatar>
</div>
```

2. Username
```
<ion-item>
  <ion-input label="Nama" :value="user?.displayName" :readonly="true"></ion-input>
</ion-item>
```

3. Email
```
<ion-item>
  <ion-input label="Email" :value="user?.email" :readonly="true"></ion-input>
</ion-item>
```

## Screenshot Login Page
![Screenshot Login](screenshot_login-google.png) </br>

## Screenshot Profile
Note: Profile picture email saya memang hitam polos seperti itu, bukan karena gagal menampilkan foto </br>
![Screenshot Login](screenshot_profile.png)
