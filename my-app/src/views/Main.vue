<template>
    <div>      
        <el-container>
            <el-aside width="200px">
                <common-aside></common-aside>
            </el-aside>
            <el-container>
                <el-header >Aside</el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        CommonAside
    }
}
</script>

<style>

</style>