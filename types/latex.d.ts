/**
 * Represents an object containing LaTeX-related content.
 *
 * @interface
 * @extends {HasCategories}
 */
export interface LatexContentObject extends HasCategories {
  /**
   * The name of the LaTeX content object.
   *
   * @type {string}
   */
  name: string;

  /**
   * The slug associated with the LaTeX content object.
   *
   * @type {string}
   */
  slug: string;

  /**
   * The page title of the LaTeX content object.
   *
   * @type {string}
   */
  'page-title': string;

  /**
   * The search-friendly page title of the LaTeX content object.
   *
   * @type {string}
   */
  'page-title-search': string;
}
