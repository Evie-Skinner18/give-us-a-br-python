import axios from 'axios';
import { CssAnalysisResults } from './CssAnalysisResults';
import { JsAnalysisResults } from './JsAnalysisResults';

export class WebsiteAnalysis {
    url!: string;
    cssAnalysisResults!: CssAnalysisResults;
    jsAnalysisResults!: JsAnalysisResults;

    constructor(url: string, 
        cssAnalysisResults: CssAnalysisResults, jsAnalysisResults: JsAnalysisResults){
        this.url = url,
        this.cssAnalysisResults = cssAnalysisResults,
        this.jsAnalysisResults = jsAnalysisResults
    }

    static EMPTY(){
        return new WebsiteAnalysis('', new CssAnalysisResults(), new JsAnalysisResults());
    }

    
    public async getCssCoverageResults(): Promise<CssAnalysisResults> {
        const url = `https://eco-lens-node.herokuapp.com/getCssCoverage?url=${this.url}`;
        const response = await axios.get(url);

        return response.data;
    }

    public getUnusedCssBytes(): number{
        const unusedBytes = 
        this.cssAnalysisResults.summary[0].totalBytes - this.cssAnalysisResults.summary[0].usedBytes;
        return unusedBytes;
    }
}