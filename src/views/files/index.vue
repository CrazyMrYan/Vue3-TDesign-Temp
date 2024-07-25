<template>
  <t-table
    style="width: 100%"
    row-key="key"
    :data="tableData"
    :columns="columns"
    table-layout="fixed"
    table-content-width="800px"
    :hover="hover"
    resizable
    lazy-load
    @active-change="onActiveChange"
    :pagination="{ defaultPageSize: 10, defaultCurrent: 1, total: totals }"
  ></t-table>
</template>

<script lang="jsx" setup>
import { ref, defineOptions } from 'vue'
import { getFiles } from '@/apis/files'
import dayjs from 'dayjs'
import { BrowseIcon } from 'tdesign-icons-vue-next'
// import { ImageViewer } from 'tdesign-vue-next'

defineOptions({
  name: 'FilePage'
})

const hover = ref(false)

const tableData = ref([])
const totals = ref(0)

const columns = [
  {
    colKey: 'img',
    fixed: 'left',
    title: '图片',
    width: '120',
    cell(h, { row }) {
      return (
        <div class="tdesign-demo-image-viewer__base">
          <t-image-viewer images={[row.file_location]}>
            {{
              trigger: ({ open }) => (
                <div class="tdesign-demo-image-viewer__ui-image">
                  <img
                    alt="test"
                    src={row.thumb_location}
                    class="tdesign-demo-image-viewer__ui-image--img"
                  />
                  <div class="tdesign-demo-image-viewer__ui-image--hover" onClick={open}>
                    <span>
                      <BrowseIcon size="1.4em" /> 预览
                    </span>
                  </div>
                </div>
              )
            }}
          </t-image-viewer>
        </div>
      )
    }
  },
  { colKey: 'filename', fixed: 'left', title: '文件名', width: '400', ellipsis: true },
  { colKey: 'file_size', title: '文件大小', width: '200' },
  { colKey: 'ext', title: '文件后缀', width: '200' },
  {
    colKey: 'is_public',
    title: '是否公开',
    width: '200',
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

.tdesign-demo-image-viewer__base {
  width: 80px;
  height: 80px;
  margin: 10px;
  border: 4px solid var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-medium);
}
</style>
