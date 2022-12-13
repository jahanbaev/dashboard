<template>
    <div class="w-full">
        <div class="flex w-full">
            <div class="h-48 w-1/3 p-2">
                <div class="bg-slate-300 w-full h-full rounded-md p-5">
                    <h1 class="text-2xl text-zinc-900 font-medium ">All projects</h1>
                    <h1 class="text-4xl text-black font-bold mt-[4.2rem] ml-auto  text-right">2</h1>
                </div>
            </div>

            <div class="h-48 w-1/3 p-2">
                <div class="bg-slate-300 w-full h-full rounded-md p-5">
                    <h1 class="text-2xl text-zinc-900 font-medium ">Total sales</h1>
                    <h1 class="text-4xl text-black font-bold mt-[4.2rem] ml-auto  text-right">342 k</h1>
                </div>
            </div>

            <div class="h-48 w-1/3 p-2">
                <div class="bg-slate-300 w-full h-full rounded-md p-5">
                    <h1 class="text-2xl text-zinc-900 font-medium ">Total views</h1>
                    <h1 class="text-4xl text-black font-bold mt-[4.2rem] ml-auto  text-right">620 m</h1>
                </div>
            </div>
        </div>
        <div class="p-2">
            <h1 class="text-2xl font-normal mt-5 mb-4">last sold products</h1>
            <div class="w-full bg-slate-100 rounded-md overflow-hidden">
                <div v-for="(list, index) in list" :key="list.id" class="flex border-solid border-b border-zinc-200 p-2 items-center justify-center" >
                    <h1 class="text-base text-slate-600 mr-3 ml-2">{{index + 1}}</h1>
                    <h1 class="text-base text-slate-800 mr-4"> {{list.name}}</h1>
                    <h1 class="text-base text-slate-800 mr-auto">{{list.phone}}</h1>
                    <h1 class="text-base text-slate-800 font-medium mr-2">{{list.cost}}</h1>
                </div>
            </div>
        </div>
</div>
</template>

<script> 

   export default {
    data() {
        return {
            list: [
                {
                    id:125657623,
                    name:"lorem ipsum",
                    phone:'+998 93 549 18 ..',
                    type:'sold',
                    cost:'12 000 sum'
                },
                {
                    id:132324233,
                    name:"lorem ipsum",
                    phone:'+998 93 549 18 ..',
                    type:'sold',
                    cost:'210 000 sum'
                },
                {
                    id:1323221,
                    name:"lorem ipsum",
                    phone:'+998 93 549 18 ..',
                    type:'sold',
                    cost:'121 000 sum'
                },
                {
                    id:122132223,
                    name:"lorem ipsum",
                    phone:'+998 93 549 18 ..',
                    type:'sold',
                    cost:'151 000 sum'
                },
                {
                    id:112232323,
                    name:"lorem ipsum",
                    phone:'+998 93 549 18 ..',
                    type:'sold',
                    cost:'541 000 sum'
                },
                {
                    id:156325623,
                    name:"lorem ipsum",
                    phone:'+998 93 549 18 ..',
                    type:'sold',
                    cost:'91 000 sum'
                },
                {
                    id:12132243,
                    name:"lorem ipsum",
                    phone:'+998 93 549 18 ..',
                    type:'sold',
                    cost:'46 000 sum'
                },
                {
                    id:13222123,
                    name:"lorem ipsum",
                    phone:'+998 93 549 18 ..',
                    type:'sold',
                    cost:'84 000 sum'
                },
                {
                    id:168998723,
                    name:"lorem ipsum",
                    phone:'+998 93 549 18 ..',
                    type:'sold',
                    cost:'21 000 sum'
                },
            ]
        };
    },
   }
</script>