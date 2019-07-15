import {Model} from './Model'
import {Attributes} from './Attributes'
import {ApiSync} from './ApiSync'
import {Eventing} from './Eventing'
import {Collection} from './Collection'

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost3000/users'

export class User extends Model<UserProps> {
  static buildUserCollection (): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      rootUrl,
      (json: UserProps) => User.build(json)
    )
  }

  static build (attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    )
  }
}