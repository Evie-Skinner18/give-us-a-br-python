// change so it mirrors the real one

export class JsAnalysisResults {
    summary!: JsSummary[];
    detail!: JsDetail[];
}

class JsSummary {
    url!: string;
    type!: string;
    usedBytes!: number;
    totalBytes!: number;
    ranges!: Range[];
}

class JsDetail {
    url!: string;
    ranges!: Range[];
    text!: string;
}

class Range {
    start!: number;
    end!: number;
}