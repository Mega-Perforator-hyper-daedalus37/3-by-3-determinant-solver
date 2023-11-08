export const createElement = ({
  tag = "div",
  parent,
  elementClass,
  text,
  id,
  attribute,
  eventObj,
}) => {
  const element = document.createElement(tag);
  if (elementClass) {
    element.classList.add(...elementClass);
  }
  element.textContent = text;
  if (id) {
    element.id = id;
  }
  if (attribute) {
    attribute.forEach((item) => {
      element.setAttribute(item.attribute, item.value || "");
    });
  }
  parent.append(element);
  if (eventObj) {
    element.addEventListener(eventObj.event, (event) => {
      eventObj.callbackFn(event);
    });
  }
  return element;
};
export function createInput({
  elementClass = [],
  parent,
  type,
  id,
  name,
  value = "",
  pattern,
  maxLength,
  title,
  required,
  autocomplete,
}) {
  const element = document.createElement("input");
  element.classList.add(...elementClass);
  element.type = type;
  element.id = id;
  element.name = name;
  element.value = value;
  if (pattern) {
    element.pattern = pattern;
  }
  if (maxLength) {
    element.maxLength = maxLength;
  }
  if (title) {
    element.title = title;
  }
  element.required = required;
  element.autocomplete = autocomplete;
  parent.append(element);
}
