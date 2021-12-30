interface ErrorCotnainer {
  [prop: string]: string;
}

const errorBag: ErrorCotnainer = {
  email: "Not a Valid email",
  username: "Must start with a capital chractor",
};
