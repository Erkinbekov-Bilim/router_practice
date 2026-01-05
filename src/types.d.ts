interface INavigateItem {
  name: string;
  to: string;
}

interface IEdwardSnowdenInfo {
  id: string;
  title: string;
  content: string | string[] | { label: string; text: string | string[] };
}

interface IEdwardSnowden {
  [key: string]: IEdwardSnowdenInfo[];
}

export { INavigateItem, IEdwardSnowdenInfo, IEdwardSnowden };
