<script></script>
<template>
<img src="../assets/welcome.png">
<div class="register">
    <h1>Join Us</h1>
    <input type="text" placeholder="Enter Nickname">
    <input type="text" placeholder="Enter Email">
    <input type="password" placeholder="Enter Password">
    <button>Signup</button>
</div>
</template>
<style>
img{
    width:220px;
    height:300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.register {
    border: 1px solid lavender;
    display:block
}
.register h1{
    padding-left: 560px;
    margin-top : 30px;
    margin-bottom: 30px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color:salmon
}
.register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid lavender;
}
.register button{
    width: 320px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid lavender;
    background: lavender;
}
</style>