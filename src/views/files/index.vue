<template>
  <t-space direction="vertical">
    <t-table
      row-key="key"
      headerAffixedTop
      footerAffixedBottom
      table-layout="fixed"
      :data="tableData"
      :columns="columns"
      :hover="hover"
      lazy-load
      @active-change="onActiveChange"
      :pagination="{ defaultPageSize: 10, defaultCurrent: 1, total: totals }"
    ></t-table>
  </t-space>
</template>

<script setup>
import { ref, defineOptions } from 'vue'
import { getFiles } from '@/apis/files'
import dayjs from 'dayjs'

defineOptions({
  name: 'FilePage'
})

const hover = ref(false)

const tableData = ref([])
const totals = ref(0)

const columns = [
  { colKey: 'filename', fixed: true, title: '文件名', width: '400', ellipsis: true },
  { colKey: 'file_size', title: '文件大小' },
  { colKey: 'ext', title: '文件后缀' },
  {
    colKey: 'is_public',
    title: '是否公开',
    cell(h, { row }) {
      return row.is_public ? '是' : '否'
    }
  },
  { colKey: 'creator.name', title: '创建人', ellipsis: true },
  {
    colKey: 'created_at',
    title: '创建时间',
    width: '200',
    cell(h, { row }) {
      return dayjs(row.created_at).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  { colKey: 'updater.name', title: '更新人' },
  {
    colKey: 'updated_at',
    title: '更新时间',
    width: '200',
    cell(h, { row }) {
      return dayjs(row.updated_at).format('YYYY-MM-DD HH:mm:ss')
    }
  }
]

const onActiveChange = (highlightRowKeys, ctx) => {
  console.log(highlightRowKeys, ctx)
}

async function queryFiles() {
  const { items, total } = await getFiles()
  tableData.value = items
  totals.value = total
}

queryFiles()
</script>

<style lang="less"></style>
