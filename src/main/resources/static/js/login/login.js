'use strict';

//function login(){
//  let loginForm = document.loginForm;
//  let userID = loginForm.id.value;
//  let userPW = loginForm.pw.value;
//
//  if(!userID || !userPW){
//    alert("아이디와 비밀번호를 입력해주세요.")
//  }else{
//    login.submit();
//    }
//  }

const $loginBtn = document.getElementById('loginBtn');
$loginBtn?.addEventListener("click", e=>{

  loginForm.submit();
  const url = `/`;
  location.href = url;
  console.log('로그인제출성공');
  });