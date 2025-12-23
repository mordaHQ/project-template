/**
 * Project Template — Public API
 *
 * @packageDocumentation
 *
 * Production-ready TypeScript project template.
 *
 * This file defines the **public API surface** of the package.
 * Only symbols exported from this file are considered stable and documented.
 *
 * ---
 *
 * ## What is included
 *
 * - Typed domain models (`User`, `ApiResult`)
 * - Public utility functions (`getUser`, `sumAges`)
 *
 * ---
 *
 * ## Design principles
 *
 * - Explicit exports only
 * - No hidden side effects
 * - Stable contracts over time
 *
 * @remarks
 * Anything not exported from this file is considered **internal**
 * and may change without notice.
 */

/* ============================================================================
 * Types (Public)
 * ============================================================================
 */

/**
 * Domain entity representing a user.
 *
 * @group Types
 */
export type { User, ApiResult } from "./types/user";

/* ============================================================================
 * Functions (Public)
 * ============================================================================
 */

/**
 * Public user-related operations.
 *
 * @group Functions
 */
export { getUser, sumAges } from "./modules/user";
