<script setup>
import { computed, ref, watch } from 'vue'

const pickerValue = ref()

/**
 * @Description 目前支持单选，后面如若需要支持多选在这里扩展参数类型
 */
const emits = defineEmits(['update:value', 'change'])

const show = ref(false)

function onConfirm(value) {
	console.log(value, '---')
	// pickerValue.value = value.selectedValue[0]
	show.value = false
	options.value = [
		{
			text: '测试三',
			value: '3'
		},
		{
			text: '测试四',
			value: '4'
		}
	]
}

const options = ref([
	{
		text: '测试一',
		value: '1'
	},
	{
		text: '测试二',
		value: '2'
	}
])

</script>

<template>
	<nut-cell
		:title="pickerValue"
		@click="show = true"
	>
		<template #link>
			<nut-icon custom-color="#BEBEBE" name="rect-right" />
		</template>
	</nut-cell>

	<nut-popup
		v-model:visible="show"
		position="bottom"
		safe-area-inset-bottom
	>
		<view v-if="!(options && options.length)" class="py-10px w-full text-center text-black">
			暂无数据
		</view>
		<nut-picker
			v-else
			v-model="pickerValue"
			:columns="options"
			title="选择"
			@confirm="onConfirm"
			@cancel="show = false"
		/>
	</nut-popup>
</template>

<style scoped>

</style>

