<template>
    <form action="" method="POST" @submit.prevent="login">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address or Username</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone company.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
            <div id="emailHelp" class="form-text">All passwords never share with the gobernment.</div>
        </div>

        <button type="button" class="btn btn-primary" style=" --bs-btn-color: var(--bs-blue);"> Login
        </button>
    </form>
</template>

<script>
export default{
    data(){
        return{
            username: '',
            password: ''
        }
    },
    methods: {
        login(){
            
        }
    }    
}
</script>