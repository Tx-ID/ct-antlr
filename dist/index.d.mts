declare function JakselToLISP(input: string): {
    success: true;
    content: string;
} | {
    success: false;
    error: string;
};

export { JakselToLISP as default };
