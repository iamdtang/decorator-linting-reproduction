import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class Foo extends Component {
  @action
  one() {}

  @action two() {
    return 2;
  }
}
