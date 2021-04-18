export class CssAnalysisResults {
    detail!: CssDetail[];
    summary!: CssSummary[];
}

class CssSummary {
    url!: string;
    type!: string;
    usedBytes!: number;
    totalBytes!: number;
    ranges!: Range[];
}

class CssDetail {
    url!: string;
    ranges!: Range[];
    text!: string;
}

class Range {
    start!: number;
    end!: number;
}