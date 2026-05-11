import resourceTags from "./resourceTags.json" with { type: "json" };

export default function () {
  return [...resourceTags, { name: "Data Plans", id: "data-plans" }];
}
