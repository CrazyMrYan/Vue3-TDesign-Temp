<template>
  <t-radio-group default-value="2">
    <t-radio-button value="1"><ViewListIcon /></t-radio-button>
    <t-radio-button value="2"><ComponentGridIcon /></t-radio-button>
  </t-radio-group>
  <t-space break-line>
    <FileCard v-for="item in tableData" :key="item.id" :file-item="item" />
  </t-space>
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
  defaultPageSize: 10,
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
.tdesign-demo-image-viewer__ui-image {
  width: 100%;
  height: 100%;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: var(--td-radius-small);
  overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--td-text-color-anti);
  line-height: 22px;
  transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
  opacity: 1;
  cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  position: absolute;
}

.tdesign-demo-image-viewer__ui-image--footer {
  padding: 0 16px;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: var(--td-text-color-anti);
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  box-sizing: border-box;
}

.tdesign-demo-image-viewer__ui-image--title {
  flex: 1;
}

.tdesign-demo-popup__reference {
  margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
  cursor: pointer;
}
</style>
