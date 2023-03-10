<template>
    <tr>
        <td> <img :src="member.avatar_url"></td>
        <td>{{ member.id }}</td>
        <td>{{ member.login }}</td>
    </tr>
</template>

<script setup lang="ts"> 
import { MemberEntity} from './model/memberEntity'
interface Props {
    member: MemberEntity
}

const props = defineProps<Props>()
</script>

<style scoped>

</style>