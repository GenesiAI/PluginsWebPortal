export const baseName = "/";
export const home = "/";
export const yourPlugins = "your-plugins";
export const plugin = "plugin/:guid";
export const pluginBuilder = (guid: string) => plugin.replace(":guid", guid);
export const support = "support";
export const contacts = "contacts";
export const questions = "questions";
export const checkout = {
  base: "manage-subscriptions",
  success: "success",
  cancelled: "cancelled"
};
export const sitemapUrls: sitemapUrlsT[] = [
  { url: home, changefreq: "weekly", priority: 0.9 },
  { url: support, changefreq: "weekly", priority: 0.5 },
  { url: contacts, changefreq: "weekly", priority: 0.7 }
];

interface sitemapUrlsT {
  url: string;
  /**
   * Change Frequency (<changefreq>)
   * The <changefreq> tag indicates how frequently the content of a URL is expected to change. This provides search engines with an indication of how often they should crawl this URL. The possible values are:
   *
   * always: The content changes with every visit.
   * hourly: The content changes every hour.
   * daily: The content changes every day.
   * weekly: The content changes every week.
   * monthly: The content changes every month.
   * yearly: The content changes every year.
   * never: The content never changes.
   * For example, a blog post might have a change frequency of monthly if you update it with new information once a month, while a "Contact Us" page might have a change frequency of yearly if it rarely changes.
   *
   * Note: The <changefreq> tag is a hint to search engines and not a command. Search engines may choose to ignore this tag based on their crawling algorithms.
   *
   * By using these tags effectively, you can guide search engines to crawl and index your site more efficiently.
   * */
  changefreq:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  /**
   * Priority (<priority>)
   * The <priority> tag indicates the importance of a particular URL relative to other URLs on your website. The value for this tag is a number between 0.0 and 1.0, where 1.0 is the highest priority.
   *
   * 1.0: This URL is the most important on your site.
   * 0.5: This URL has a medium level of importance (this is the default value if the tag is not specified).
   * 0.0: This URL is the least important on your site.
   * For example, your homepage might have a priority of 1.0, while a deep-linked FAQ page might have a priority of 0.4.
   *
   * Note: The priority you assign to a page is not an absolute measure of its importance, but rather an indication to search engines of how important you consider this page to be in relation to other pages on your site.
   *  */
  priority: number;
}
