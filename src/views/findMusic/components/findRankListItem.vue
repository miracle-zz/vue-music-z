<template>
  <div class="rankListItem" v-show="id">
    <table>
      <tr>
        <th>
          <img :src="coverImgUrl" alt />
          <span>{{name}}</span>
        </th>
      </tr>
      <tr v-for="(item,index) in songList" :key="index">
        <td>
          <span class="number">{{index+1}}</span>
          {{item.name}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { getSongList } from 'network/detail.js'

export default {
  name: 'findRankListItem',
  props: {
    name: String,
    coverImgUrl: String,
    id: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      songList: []
    }
  },
  methods: {
    _getSongList (id) {
      getSongList(id).then(res => {
        const data = res.data.playlist.tracks
        this.songList = data.slice(0, 10)
      })
    }
  },
  watch: {
    id (newVal, oldVal) {
      if (newVal) {
        this._getSongList(this.id)
      }
    }
  }
}
</script>

<style lang="scss">
.rankListItem {
  table {
    th {
      background-color: #ffffff;
      height: 80px;
      span {
        color: #333333;
      }
      // align: center;
      // line-height: 15px;
      img {
        width: 80px;
        height: 80px;
        vertical-align: middle;
      }
      span {
        font-size: 20px;
      }
    }
    tr {
      td {
        width: 250px;
        height: 32px;
        font-size: 12px;
        text-indent: 25px;
        background-color: #ffffff;
      }
      &:hover {
        background-color: #cccccc;
      }
      &:nth-child(odd) {
        background-color: #e5e5e5;
      }
      &:nth-child(-n + 4) {
        .number {
          color: red;
        }
      }
    }
  }
}
</style>
