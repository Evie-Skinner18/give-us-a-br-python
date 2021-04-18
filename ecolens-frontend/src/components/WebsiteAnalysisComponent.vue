<template>
    <div>
       <h1>EcoLens results for {{ websiteAnalysis.url }}</h1>
       <p v-if="websiteAnalysis.getUnusedCssBytes()">
           This website is not using {{ websiteAnalysis.getUnusedCssBytes() }} of its total CSS bytes! 
       </p>
    </div>   
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { WebsiteAnalysis } from '../domain/WebsiteAnalysis';

@Component({})
export default class WebsiteAnalysisComponent extends Vue {
    @Prop({default: WebsiteAnalysis.EMPTY()}) private websiteAnalysis!: WebsiteAnalysis;
}
</script>

<style scoped>

</style>