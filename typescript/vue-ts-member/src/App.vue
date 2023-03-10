<script setup lang="ts">
import MemberHeader from './MemberHeader.vue'
import { ref, onMounted, Ref } from 'vue'
import { MemberEntity } from './model/memberEntity';
import { fetchMemberAsync } from './api/index'
import { members } from './api/member'
import MemberRow from './MemberRow.vue'

const membersRef:Ref<MemberEntity[]> = ref([])
onMounted(async () => {
  const data = await fetchMemberAsync() {
    
  }
  // membersRef.value = members;
})

</script>

<template>
<div class="row">
  <h2>Members Page</h2>
  <table class="table">
    <thead>
      <MemberHeader></MemberHeader>
    </thead>
    <tbody>
      <MemberRow
        v-for="member in membersRef"
        :key="member.id"
        :member = member
        ></MemberRow>
      <!-- <tr v-for="member in membersRef" key="member.id">
        <td>
          <img :src="member.avatar_url">
        </td>
        <td>
          {{ member.id }}
        </td>
        <td>
          {{ member.login }}
        </td>
      </tr> -->
    </tbody>
  </table>
</div>
</template>

<style scoped>

</style>
