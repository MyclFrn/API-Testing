<template>
    <div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="post in posts">
                <div class="card">
                    <router-link :to="`/blog/${ post.id }`">
                        <div class="card-header">{{ post.title }}</div>
                    </router-link>                
                    <div class="card-body">
                        <a class="card-link">{{ post.author.name }}</a>
                        <a class="card-link">Comentarios</a>
                        <h6 class="card-subtitle mb-2 text-muted">{{ post.created_at }}</h6>
                    </div>
                </div>
            </div>
        </div>
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">...</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            posts: []
        };
    },
    async mounted(){
        try{
            const blog = await axios({
                method: 'post',
                url: 'http://blog.demo:8000/graphql',
                data:{
                    query: `
                    query{
                        posts(orderBy:[{column:CREATED_AT, order:DESC}]){
                            data{
                                id
                                title
                                created_at
                                author
                                {
                                    name
                                }
                            }
                        }
                    }`
                }
            });
        this.posts = blog.data.data.posts.data;
        } catch (error){
            console.error(error);
        }
    }
}
</script>
