import { CheckConfig, ValidationResult } from './checks';
export interface CommentConfig extends CheckConfig {
    stellarAddress: string;
    horizonUrl: string;
}
export declare const TRUSTBRIDGE_FOOTER = "_Posted by [stellar-drive-trustbridge-action](https://github.com/Stellar-drive/stellar-drive-trustbridge-action)_";
export declare function formatCommentBody(result: ValidationResult, config: CommentConfig): string;
export declare function postIssueComment(token: string, body: string): Promise<void>;
