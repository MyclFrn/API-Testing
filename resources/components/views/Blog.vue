<template>
    <div>
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="position-relative top-0" style="width: 67%">
                <h1 class="display-4" style="height: 90px;">{{ b.title }}</h1>
                <hr class="border border-primary border-2 opacity-25">
                <p class="lh-lg font-monospace fs-5" style="height: 240px">{{ b.content }}</p>
                
                <div class="row row-cols-2 row-cols-md-2 g-4">
                    <div class="form-floating" style="width: 67%">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Comments</label>
                    </div>

                    <div>
                        <button type="button" class="btn btn-primary" style=" --bs-btn-color: var(--bs-blue);">Submit</button>
                    </div>
                </div>
            </div>

            <div class="d-flex" style="height: 400px; width: 3%;">
                <div class="vr"></div>
            </div>

            <div class="position-relative top-0" style="width: 27%">
                <h1 class="display-5 fs-3">Comments</h1>
                <hr>
                <div class="card shadow-sm mt-3" v-for="comments in b.comments">               
                    <div class="card-body">
                        <h5 class="card-text fs-5"> {{ comments.reply }}</h5>
                        <a class="text-muted fs-8">Created At</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            b: []
        };
    },
    async mounted(){
        try{
            const pr = await axios({
                method: 'post',
                url: 'http://blog.demo:8000/graphql',
                data:{
                    query: `
                    query{
                        post(id: ${this.$route.params.id}){
                            title
                            content
                            comments{
                                reply
                            }
                        }
                    }`
                }
            });
        this.b = pr.data.data.post;
        } catch (error){
            console.error(error);
        }
    }
}
</script>