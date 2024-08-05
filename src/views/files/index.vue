<template>
  <div class="table__card">
    <t-radio-group class="button__group" default-value="2">
      <t-radio-button value="1"><ViewListIcon /></t-radio-button>
      <t-radio-button value="2"><ComponentGridIcon /></t-radio-button>
    </t-radio-group>
    <t-space break-line>
      <FileCard v-for="item in tableData" :key="item.id" :file-item="item" />
    </t-space>
    <t-pagination
      class="table__pagination"
      :total="pagination.total"
      :default-current="pagination.defaultCurrent"
      :default-page-size="pagination.defaultPageSize"
      @change="fetchData"
    />
  </div>
</template>

<script lang="jsx" setup>
// <TableIcon />
import { ref, defineOptions } from 'vue'
import { getFiles } from '@/apis/files'
// import dayjs from 'dayjs'
import { ViewListIcon, ComponentGridIcon } from 'tdesign-icons-vue-next'
import { convertPageToOffsetLimit } from '@/utils/format'
// import { ImageViewer } from 'tdesign-vue-next'
import FileCard from '@/components/file-card.vue'

defineOptions({
  name: 'FilePage'
})

// const hover = ref(false)

const tableData = ref([])

// const columns = [
//   {
//     colKey: 'img',
//     fixed: 'left',
//     title: '图片'
//   },
//   { colKey: 'filename', fixed: 'left', width: 600, title: '文件名', ellipsis: true },
//   { colKey: 'file_size', title: '文件大小' },
//   { colKey: 'ext', title: '文件后缀' },
//   {
//     colKey: 'is_public',
//     title: '是否公开',

//     cell(h, { row }) {
//       return row.is_public ? '是' : '否'
//     }
//   },
//   { colKey: 'creator.name', title: '创建人', ellipsis: true },
//   {
//     colKey: 'created_at',
//     title: '创建时间',
//     cell(h, { row }) {
//       return dayjs(row.created_at).format('YYYY-MM-DD HH:mm:ss')
//     }
//   },
//   { colKey: 'updater.name', title: '更新人' },
//   {
//     colKey: 'updated_at',
//     title: '更新时间',
//     fixed: 'right',
//     cell(h, { row }) {
//       return dayjs(row.updated_at).format('YYYY-MM-DD HH:mm:ss')
//     }
//   }
// ]

const pagination = ref({
  defaultPageSize: 24,
  total: 0,
  defaultCurrent: 1
})

async function fetchData({ current = 1, pageSize = 24 } = {}) {
  const params = {
    ...convertPageToOffsetLimit(current, pageSize)
  }

  const { items, total } = await getFiles(params)
  tableData.value = items
  pagination.value.total = total
}

fetchData()
</script>

<style>
.table__card {
  background-color: var(--td-bg-color-container);
}
.button__group {
  padding: var(--td-size-5);
  padding-bottom: 0;
}

.table__pagination {
  padding: var(--td-size-5);
  padding-top: var(--td-size-9);
  padding-bottom: var(--td-size-9);
}
</style>
