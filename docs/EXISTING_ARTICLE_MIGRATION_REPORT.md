# Existing Article Migration Report

Date: 2026-06-16

## Summary

Existing seed articles remain accessible at their original slugs. They are preserved in `src/data/site.js` and are merged with database-published articles at render time.

## Articles

| Article | Current slug | SEO title status | Meta description status | Featured image status | Alt text status | Author status | Indexability status | Required manual action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| How to Import Green Coffee Beans from Indonesia: A Practical Buyer Guide | `how-to-import-green-coffee-beans-from-indonesia` | Generated from title | Generated from excerpt | Existing public image | Present | Fallback organization author | Published/indexable | Review sources if market/export claims are expanded |
| Java Ijen Arabica Coffee: Origin, Profile, and Sourcing Notes | `java-ijen-coffee-origin-altitude-profile` | Generated from title | Generated from excerpt | Existing public image | Present | Fallback organization author | Published/indexable | Add reviewer before adding technical origin claims |
| Green Coffee Moisture Content Explained | `green-coffee-moisture-content-explained` | Generated from title | Generated from excerpt | Existing public image | Present | Fallback organization author | Published/indexable | Add technical reviewer and sources for detailed quality claims |

## Notes

- No seed article was deleted.
- Seed articles are not editable from dashboard because their source of truth is code.
- New dashboard-created articles are stored in Neon `content_records`.
