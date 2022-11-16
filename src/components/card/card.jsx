import React, { Component } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

class Card extends Component {
  render() {
    const { id, name, email, phone, username } = this.props.monster;
    return (
      <div className="flex flex-col col-span-1 text-center bg-teal-700 divide-y divide-gray-200 rounded-lg shadow">
        <div className="flex flex-col flex-1 p-8">
          <img
            className="flex-shrink-0 w-32 h-32 mx-auto rounded-full"
            src={`https://robohash.org/${id}?set=set2&size=180x180`}
            alt=""
          />
          <h3 className="mt-6 text-sm font-medium text-gray-900">{name}</h3>
          <dl className="flex flex-col justify-between flex-grow mt-1">
            <dt className="sr-only">Title</dt>
            <dd className="text-sm text-gray-500">{email}</dd>
            <dt className="sr-only">Role</dt>
            <dd className="mt-3">
              <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                {username}
              </span>
            </dd>
          </dl>
        </div>
        <div>
          <div className="flex -mt-px divide-x divide-gray-200">
            <div className="flex flex-1 w-0">
              <a
                href={`mailto:${email}`}
                className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border border-transparent rounded-bl-lg hover:text-gray-500"
              >
                <EnvelopeIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-3">Email</span>
              </a>
            </div>
            <div className="flex flex-1 w-0 -ml-px">
              <a
                href={`tel:${phone}`}
                className="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg hover:text-gray-500"
              >
                <PhoneIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-3">Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
