{
  "routes" : {
    "\/wp\/v2\/users\/me" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed" true,
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            }
          }
        },
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : {
            "description" : {
              "description" : "Description of the user.",
              "type" : "string",
              "required" : true
            },
            "roles" : {
              "items" : {
                "type" : "string"
              },
              "required" : true,
              "description" : "Roles assigned to the user.",
              "type" : "array"
            },
            "url" : {
              "description" : "URL of the user.",
              "type" : "string",
              "required" : true
            },
            "locale" : {
              "enum" : [
                "",
                "en_US"
              ],
              "required" : true,
              "description" : "Locale for the user.",
              "type" : "string"
            },
            "password" : {
              "description" : "Password for the user (never included).",
              "type" : "string",
              "required" : true
            },
            "first_name" : {
              "description" : "First name for the user.",
              "type" : "string",
              "required" : true
            },
            "slug" : {
              "description" : "An alphanumeric identifier for the user.",
              "type" : "string",
              "required" : true
            },
            "username" : {
              "description" : "Login name for the user.",
              "type" : "string",
              "required" : true
            },
            "meta" : {
              "description" : "Meta fields.",
              "type" : "object",
              "required" : true
            },
            "last_name" : {
              "description" : "Last name for the user.",
              "type" : "string",
              "required" : true
            },
            "email" : {
              "description" : "The email address for the user.",
              "type" : "string",
              "required" : true
            },
            "name" : {
              "description" : "Display name for the user.",
              "type" : "string",
              "required" : true
            },
            "nickname" : {
              "description" : "The nickname for the user.",
              "type" : "string",
              "required" : true
            }
          }
        },
        {
          "methods" : [
            "DELETE"
          ],
          "args" : {
            "force" : {
              "default" : true,
              "required" : true,
              "description" : "Required to be true, as users do not support trashing.",
              "type" : "boolean"
            },
            "reassign" : {
              "description" : "Reassign the deleted user's posts and links to this user ID.",
              "type" : "integer",
              "required" : true
            }
          }
        }
      ],
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wp\/v2\/users\/me"
      }
    },
    "\/wp\/v2\/blocks\/(?P<id>[\\d]+)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the object.",
              "type" : "integer",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "password" : {
              "description" : "The password for the post if it is password protected.",
              "type" : "string",
              "required" : true
            }
          }
        },
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : {
            "slug" : {
              "description" : "An alphanumeric identifier for the object unique to its type.",
              "type" : "string",
              "required" : true
            },
            "date_gmt" : {
              "description" : "The date the object was published, as GMT.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "status" : {
              "enum" : [
                "publish",
                "future",
                "draft",
                "pending",
                "private",
                "acf-disabled"
              ],
              "required" : true,
              "description" : "A named status for the object.",
              "type" : "string"
            },
            "id" : {
              "description" : "Unique identifier for the object.",
              "type" : "integer",
              "required" : true
            },
            "password" : {
              "description" : "A password to protect access to the content and excerpt.",
              "type" : "string",
              "required" : true
            },
            "title" : {
              "description" : "The title for the object.",
              "type" : "object",
              "required" : true
            },
            "date" : {
              "description" : "The date the object was published, in the site's timezone.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "content" : {
              "description" : "The content for the object.",
              "type" : "object",
              "required" : true
            },
            "template" : {
              "description" : "The theme file to use to display the object.",
              "type" : "string",
              "required" : true
            }
          }
        },
        {
          "methods" : [
            "DELETE"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the object.",
              "type" : "integer",
              "required" : true
            },
            "force" : {
              "default" : true,
              "required" : true,
              "description" : "Whether to bypass trash and force deletion.",
              "type" : "boolean"
            }
          }
        }
      ]
    },
    "\/jetpack\/v4\/connection" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        },
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET",
        "POST",
        "PUT",
        "PATCH"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/connection"
      }
    },
    "\/oembed\/1.0\/proxy" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "maxwidth" : {
              "default" : 600,
              "required" : true,
              "description" : "The maximum width of the embed frame in pixels.",
              "type" : "integer"
            },
            "discover" : {
              "default" : true,
              "required" : true,
              "description" : "Whether to perform an oEmbed discovery request for non-whitelisted providers.",
              "type" : "boolean"
            },
            "url" : {
              "description" : "The URL of the resource for which to fetch oEmbed data.",
              "type" : "string",
              "required" : true
            },
            "maxheight" : {
              "description" : "The maximum height of the embed frame in pixels.",
              "type" : "integer",
              "required" : true
            },
            "format" : {
              "default" : "json",
              "enum" : [
                "json",
                "xml"
              ],
              "required" : true,
              "description" : "The oEmbed format to use.",
              "type" : "string"
            }
          }
        }
      ],
      "namespace" : "oembed\/1.0",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/oembed\/1.0\/proxy"
      }
    },
    "\/jetpack\/v4\/connection\/owner" : {
      "endpoints" : [
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "POST",
        "PUT",
        "PATCH"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/connection\/owner"
      }
    },
    "\/wp\/v2\/pages" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "before" : {
              "description" : "Limit response to posts published before a given ISO8601 compliant date.",
              "type" : "string",
              "required" : true
            },
            "parent_exclude" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to all items except those of a particular parent ID.",
              "type" : "array"
            },
            "author" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to posts assigned to specific authors.",
              "type" : "array"
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "menu_order" : {
              "description" : "Limit result set to posts with a specific menu_order value.",
              "type" : "integer",
              "required" : true
            },
            "orderby" : {
              "default" : "date",
              "enum" : [
                "author",
                "date",
                "id",
                "include",
                "modified",
                "parent",
                "relevance",
                "slug",
                "include_slugs",
                "title",
                "menu_order"
              ],
              "required" : true,
              "description" : "Sort collection by object attribute.",
              "type" : "string"
            },
            "parent" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to items with particular parent IDs.",
              "type" : "array"
            },
            "author_exclude" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Ensure result set excludes posts assigned to specific authors.",
              "type" : "array"
            },
            "include" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to specific IDs.",
              "type" : "array"
            },
            "per_page" : {
              "default" : 10,
              "required" : true,
              "description" : "Maximum number of items to be returned in result set.",
              "type" : "integer"
            },
            "offset" : {
              "description" : "Offset the result set by a specific number of items.",
              "type" : "integer",
              "required" : true
            },
            "after" : {
              "description" : "Limit response to posts published after a given ISO8601 compliant date.",
              "type" : "string",
              "required" : true
            },
            "search" : {
              "description" : "Limit results to those matching a string.",
              "type" : "string",
              "required" : true
            },
            "page" : {
              "default" : 1,
              "required" : true,
              "description" : "Current page of the collection.",
              "type" : "integer"
            },
            "exclude" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Ensure result set excludes specific IDs.",
              "type" : "array"
            },
            "order" : {
              "default" : "desc",
              "enum" : [
                "asc",
                "desc"
              ],
              "required" : true,
              "description" : "Order sort attribute ascending or descending.",
              "type" : "string"
            },
            "slug" : {
              "items" : {
                "type" : "string"
              },
              "required" : true,
              "description" : "Limit result set to posts with one or more specific slugs.",
              "type" : "array"
            },
            "status" : {
              "default" : "publish",
              "items" : {
                "type" : "string",
                "enum" : [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "trash",
                  "auto-draft",
                  "inherit",
                  "request-pending",
                  "request-confirmed",
                  "request-failed",
                  "request-completed",
                  "acf-disabled",
                  "any"
                ]
              },
              "required" : true,
              "description" : "Limit result set to posts assigned one or more statuses.",
              "type" : "array"
            }
          }
        },
        {
          "methods" : [
            "POST"
          ],
          "args" : {
            "template" : {
              "description" : "The theme file to use to display the object.",
              "type" : "string",
              "required" : true
            },
            "excerpt" : {
              "description" : "The excerpt for the object.",
              "type" : "object",
              "required" : true
            },
            "date_gmt" : {
              "description" : "The date the object was published, as GMT.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "author" : {
              "description" : "The ID for the author of the object.",
              "type" : "integer",
              "required" : true
            },
            "parent" : {
              "description" : "The ID for the parent of the object.",
              "type" : "integer",
              "required" : true
            },
            "comment_status" : {
              "enum" : [
                "open",
                "closed"
              ],
              "required" : true,
              "description" : "Whether or not comments are open on the object.",
              "type" : "string"
            },
            "menu_order" : {
              "description" : "The order of the object in relation to other object of its type.",
              "type" : "integer",
              "required" : true
            },
            "ping_status" : {
              "enum" : [
                "open",
                "closed"
              ],
              "required" : true,
              "description" : "Whether or not the object can be pinged.",
              "type" : "string"
            },
            "title" : {
              "description" : "The title for the object.",
              "type" : "object",
              "required" : true
            },
            "date" : {
              "description" : "The date the object was published, in the site's timezone.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "password" : {
              "description" : "A password to protect access to the content and excerpt.",
              "type" : "string",
              "required" : true
            },
            "slug" : {
              "description" : "An alphanumeric identifier for the object unique to its type.",
              "type" : "string",
              "required" : true
            },
            "featured_media" : {
              "description" : "The ID of the featured media for the object.",
              "type" : "integer",
              "required" : true
            },
            "meta" : {
              "description" : "Meta fields.",
              "type" : "object",
              "required" : true
            },
            "status" : {
              "enum" : [
                "publish",
                "future",
                "draft",
                "pending",
                "private",
                "acf-disabled"
              ],
              "required" : true,
              "description" : "A named status for the object.",
              "type" : "string"
            },
            "content" : {
              "description" : "The content for the object.",
              "type" : "object",
              "required" : true
            }
          }
        }
      ],
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wp\/v2\/pages"
      }
    },
    "\/jetpack\/v4\/connection\/register" : {
      "endpoints" : [
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : {
            "registration_nonce" : {
              "type" : "string",
              "required" : true
            }
          }
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "POST",
        "PUT",
        "PATCH"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/connection\/register"
      }
    },
    "\/wp\/v2\/jp_pay_product\/(?P<id>[\\d]+)\/autosaves" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "parent" : {
              "description" : "The ID for the parent of the object.",
              "type" : "integer",
              "required" : true
            }
          }
        },
        {
          "methods" : [
            "POST"
          ],
          "args" : {
            "template" : {
              "description" : "The theme file to use to display the object.",
              "type" : "string",
              "required" : true
            },
            "date_gmt" : {
              "description" : "The date the object was published, as GMT.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "author" : {
              "description" : "The ID for the author of the object.",
              "type" : "integer",
              "required" : true
            },
            "parent" : {
              "description" : "The ID for the parent of the object.",
              "type" : "integer",
              "required" : true
            },
            "title" : {
              "description" : "The title for the object.",
              "type" : "object",
              "required" : true
            },
            "date" : {
              "description" : "The date the object was published, in the site's timezone.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "password" : {
              "description" : "A password to protect access to the content and excerpt.",
              "type" : "string",
              "required" : true
            },
            "slug" : {
              "description" : "An alphanumeric identifier for the object unique to its type.",
              "type" : "string",
              "required" : true
            },
            "featured_media" : {
              "description" : "The ID of the featured media for the object.",
              "type" : "integer",
              "required" : true
            },
            "meta" : {
              "description" : "Meta fields.",
              "type" : "object",
              "required" : true
            },
            "status" : {
              "enum" : [
                "publish",
                "future",
                "draft",
                "pending",
                "private",
                "acf-disabled"
              ],
              "required" : true,
              "description" : "A named status for the object.",
              "type" : "string"
            },
            "content" : {
              "description" : "The content for the object.",
              "type" : "object",
              "required" : true
            }
          }
        }
      ]
    },
    "\/wp\/v2\/statuses" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            }
          }
        }
      ],
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wp\/v2\/statuses"
      }
    },
    "\/wp\/v2\/comments" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "parent_exclude" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Ensure result set excludes specific parent IDs.",
              "type" : "array"
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "before" : {
              "description" : "Limit response to comments published before a given ISO8601 compliant date.",
              "type" : "string",
              "required" : true
            },
            "status" : {
              "default" : "approve",
              "required" : true,
              "description" : "Limit result set to comments assigned a specific status. Requires authorization.",
              "type" : "string"
            },
            "post" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to comments assigned to specific post IDs.",
              "type" : "array"
            },
            "orderby" : {
              "default" : "date_gmt",
              "enum" : [
                "date",
                "date_gmt",
                "id",
                "include",
                "post",
                "parent",
                "type"
              ],
              "required" : true,
              "description" : "Sort collection by object attribute.",
              "type" : "string"
            },
            "author_email" : {
              "description" : "Limit result set to that from a specific author email. Requires authorization.",
              "type" : "string",
              "required" : true
            },
            "author_exclude" : {
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Ensure result set excludes comments assigned to specific user IDs. Requires authorization.",
              "type" : "array"
            },
            "parent" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to comments of specific parent IDs.",
              "type" : "array"
            },
            "type" : {
              "default" : "comment",
              "required" : true,
              "description" : "Limit result set to comments assigned a specific type. Requires authorization.",
              "type" : "string"
            },
            "after" : {
              "description" : "Limit response to comments published after a given ISO8601 compliant date.",
              "type" : "string",
              "required" : true
            },
            "offset" : {
              "description" : "Offset the result set by a specific number of items.",
              "type" : "integer",
              "required" : true
            },
            "per_page" : {
              "default" : 10,
              "required" : true,
              "description" : "Maximum number of items to be returned in result set.",
              "type" : "integer"
            },
            "page" : {
              "default" : 1,
              "required" : true,
              "description" : "Current page of the collection.",
              "type" : "integer"
            },
            "include" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to specific IDs.",
              "type" : "array"
            },
            "order" : {
              "default" : "desc",
              "enum" : [
                "asc",
                "desc"
              ],
              "required" : true,
              "description" : "Order sort attribute ascending or descending.",
              "type" : "string"
            },
            "exclude" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Ensure result set excludes specific IDs.",
              "type" : "array"
            },
            "password" : {
              "description" : "The password for the post if it is password protected.",
              "type" : "string",
              "required" : true
            },
            "search" : {
              "description" : "Limit results to those matching a string.",
              "type" : "string",
              "required" : true
            },
            "author" : {
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to comments assigned to specific user IDs. Requires authorization.",
              "type" : "array"
            }
          }
        },
        {
          "methods" : [
            "POST"
          ],
          "args" : {
            "content" : {
              "description" : "The content for the object.",
              "type" : "object",
              "required" : true
            },
            "status" : {
              "description" : "State of the object.",
              "type" : "string",
              "required" : true
            },
            "author" : {
              "description" : "The ID of the user object, if author was a user.",
              "type" : "integer",
              "required" : true
            },
            "author_ip" : {
              "description" : "IP address for the object author.",
              "type" : "string",
              "required" : true
            },
            "date_gmt" : {
              "description" : "The date the object was published, as GMT.",
              "type" : "string",
              "required" : true
            },
            "author_url" : {
              "description" : "URL for the object author.",
              "type" : "string",
              "required" : true
            },
            "parent" : {
              "default" : 0,
              "required" : true,
              "description" : "The ID for the parent of the object.",
              "type" : "integer"
            },
            "date" : {
              "description" : "The date the object was published, in the site's timezone.",
              "type" : "string",
              "required" : true
            },
            "meta" : {
              "description" : "Meta fields.",
              "type" : "object",
              "required" : true
            },
            "author_name" : {
              "description" : "Display name for the object author.",
              "type" : "string",
              "required" : true
            },
            "author_email" : {
              "description" : "Email address for the object author.",
              "type" : "string",
              "required" : true
            },
            "post" : {
              "default" : 0,
              "required" : true,
              "description" : "The ID of the associated post object.",
              "type" : "integer"
            },
            "author_user_agent" : {
              "description" : "User agent for the object author.",
              "type" : "string",
              "required" : true
            }
          }
        }
      ],
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wp\/v2\/comments"
      }
    },
    "\/wp\/v2\/block-renderer\/(?P<name>jetpack\/map)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for jetpack\/map block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/block-renderer\/(?P<name>jetpack\/address)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for jetpack\/address block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/blocks\/(?P<parent>[\\d]+)\/autosaves\/(?P<id>[\\d]+)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "id" : {
              "description" : "The ID for the object.",
              "type" : "integer",
              "required" : true
            },
            "parent" : {
              "description" : "The ID for the parent of the object.",
              "type" : "integer",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/block-renderer\/(?P<name>jetpack\/contact-info)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for jetpack\/contact-info block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/block-renderer\/(?P<name>jetpack\/google-calendar)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for jetpack\/google-calendar block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/block-renderer\/(?P<name>core\/calendar)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for core\/calendar block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/jetpack\/v4\/module\/(?P<slug>[a-z\\-]+)\/active" : {
      "namespace" : "jetpack\/v4",
      "methods" : [
        "POST",
        "PUT",
        "PATCH"
      ],
      "endpoints" : [
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : {
            "active" : {
              "default" : true,
              "type" : "boolean",
              "required" : true
            }
          }
        }
      ]
    },
    "\/wpcom\/v2\/gutenberg\/available-extensions" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "wpcom\/v2",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wpcom\/v2\/gutenberg\/available-extensions"
      }
    },
    "\/wp\/v2\/jp_pay_order\/(?P<parent>[\\d]+)\/autosaves\/(?P<id>[\\d]+)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "id" : {
              "description" : "The ID for the object.",
              "type" : "integer",
              "required" : true
            },
            "parent" : {
              "description" : "The ID for the parent of the object.",
              "type" : "integer",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            }
          }
        }
      ]
    },
    "\/jetpack\/v4\/connection\/test" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/connection\/test"
      }
    },
    "\/jetpack\/v4\/settings\/(?P<slug>[a-z\\-]+)" : {
      "namespace" : "jetpack\/v4",
      "methods" : [
        "POST",
        "PUT",
        "PATCH"
      ],
      "endpoints" : [
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : {
            "context" : {
              "default" : "edit",
              "required" : true
            }
          }
        }
      ]
    },
    "\/wp\/v2" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "namespace" : {
              "default" : "wp\/v2",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "required" : true
            }
          }
        }
      ],
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wp\/v2"
      }
    },
    "\/wp\/v2\/block-renderer\/(?P<name>jetpack\/pinterest)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for jetpack\/pinterest block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/jetpack\/v4\/module\/(?P<slug>[a-z\\-]+)\/data" : {
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "range" : {
              "default" : "day",
              "type" : "string",
              "required" : true
            }
          }
        }
      ]
    },
    "\/jetpack\/v4\/connection\/test-wpcom" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/connection\/test-wpcom"
      }
    },
    "\/jetpack\/v4\/module\/(?P<service>[a-z\\-]+)\/key\/check" : {
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET",
        "POST",
        "PUT",
        "PATCH"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        },
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : {
            "api_key" : {
              "default" : "",
              "type" : "string",
              "required" : true
            }
          }
        }
      ]
    },
    "\/wp\/v2\/block-renderer\/(?P<name>jetpack\/phone)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for jetpack\/phone block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/jp_pay_order" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "before" : {
              "description" : "Limit response to posts published before a given ISO8601 compliant date.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "orderby" : {
              "default" : "date",
              "enum" : [
                "author",
                "date",
                "id",
                "include",
                "modified",
                "parent",
                "relevance",
                "slug",
                "include_slugs",
                "title"
              ],
              "required" : true,
              "description" : "Sort collection by object attribute.",
              "type" : "string"
            },
            "include" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to specific IDs.",
              "type" : "array"
            },
            "per_page" : {
              "default" : 10,
              "required" : true,
              "description" : "Maximum number of items to be returned in result set.",
              "type" : "integer"
            },
            "offset" : {
              "description" : "Offset the result set by a specific number of items.",
              "type" : "integer",
              "required" : true
            },
            "after" : {
              "description" : "Limit response to posts published after a given ISO8601 compliant date.",
              "type" : "string",
              "required" : true
            },
            "search" : {
              "description" : "Limit results to those matching a string.",
              "type" : "string",
              "required" : true
            },
            "page" : {
              "default" : 1,
              "required" : true,
              "description" : "Current page of the collection.",
              "type" : "integer"
            },
            "exclude" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Ensure result set excludes specific IDs.",
              "type" : "array"
            },
            "order" : {
              "default" : "desc",
              "enum" : [
                "asc",
                "desc"
              ],
              "required" : true,
              "description" : "Order sort attribute ascending or descending.",
              "type" : "string"
            },
            "slug" : {
              "items" : {
                "type" : "string"
              },
              "required" : true,
              "description" : "Limit result set to posts with one or more specific slugs.",
              "type" : "array"
            },
            "status" : {
              "default" : "publish",
              "items" : {
                "type" : "string",
                "enum" : [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "trash",
                  "auto-draft",
                  "inherit",
                  "request-pending",
                  "request-confirmed",
                  "request-failed",
                  "request-completed",
                  "acf-disabled",
                  "any"
                ]
              },
              "required" : true,
              "description" : "Limit result set to posts assigned one or more statuses.",
              "type" : "array"
            }
          }
        },
        {
          "methods" : [
            "POST"
          ],
          "args" : {
            "slug" : {
              "description" : "An alphanumeric identifier for the object unique to its type.",
              "type" : "string",
              "required" : true
            },
            "date_gmt" : {
              "description" : "The date the object was published, as GMT.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "status" : {
              "enum" : [
                "publish",
                "future",
                "draft",
                "pending",
                "private",
                "acf-disabled"
              ],
              "required" : true,
              "description" : "A named status for the object.",
              "type" : "string"
            },
            "password" : {
              "description" : "A password to protect access to the content and excerpt.",
              "type" : "string",
              "required" : true
            },
            "excerpt" : {
              "description" : "The excerpt for the object.",
              "type" : "object",
              "required" : true
            },
            "date" : {
              "description" : "The date the object was published, in the site's timezone.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "meta" : {
              "description" : "Meta fields.",
              "type" : "object",
              "required" : true
            },
            "template" : {
              "description" : "The theme file to use to display the object.",
              "type" : "string",
              "required" : true
            }
          }
        }
      ],
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wp\/v2\/jp_pay_order"
      }
    },
    "\/wp\/v2\/block-renderer\/(?P<name>core\/categories)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for core\/categories block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/pages\/(?P<id>[\\d]+)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the object.",
              "type" : "integer",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "password" : {
              "description" : "The password for the post if it is password protected.",
              "type" : "string",
              "required" : true
            }
          }
        },
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the object.",
              "type" : "integer",
              "required" : true
            },
            "template" : {
              "description" : "The theme file to use to display the object.",
              "type" : "string",
              "required" : true
            },
            "excerpt" : {
              "description" : "The excerpt for the object.",
              "type" : "object",
              "required" : true
            },
            "date_gmt" : {
              "description" : "The date the object was published, as GMT.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "author" : {
              "description" : "The ID for the author of the object.",
              "type" : "integer",
              "required" : true
            },
            "parent" : {
              "description" : "The ID for the parent of the object.",
              "type" : "integer",
              "required" : true
            },
            "comment_status" : {
              "enum" : [
                "open",
                "closed"
              ],
              "required" : true,
              "description" : "Whether or not comments are open on the object.",
              "type" : "string"
            },
            "menu_order" : {
              "description" : "The order of the object in relation to other object of its type.",
              "type" : "integer",
              "required" : true
            },
            "ping_status" : {
              "enum" : [
                "open",
                "closed"
              ],
              "required" : true,
              "description" : "Whether or not the object can be pinged.",
              "type" : "string"
            },
            "title" : {
              "description" : "The title for the object.",
              "type" : "object",
              "required" : true
            },
            "date" : {
              "description" : "The date the object was published, in the site's timezone.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "password" : {
              "description" : "A password to protect access to the content and excerpt.",
              "type" : "string",
              "required" : true
            },
            "slug" : {
              "description" : "An alphanumeric identifier for the object unique to its type.",
              "type" : "string",
              "required" : true
            },
            "featured_media" : {
              "description" : "The ID of the featured media for the object.",
              "type" : "integer",
              "required" : true
            },
            "meta" : {
              "description" : "Meta fields.",
              "type" : "object",
              "required" : true
            },
            "status" : {
              "enum" : [
                "publish",
                "future",
                "draft",
                "pending",
                "private",
                "acf-disabled"
              ],
              "required" : true,
              "description" : "A named status for the object.",
              "type" : "string"
            },
            "content" : {
              "description" : "The content for the object.",
              "type" : "object",
              "required" : true
            }
          }
        },
        {
          "methods" : [
            "DELETE"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the object.",
              "type" : "integer",
              "required" : true
            },
            "force" : {
              "default" : true,
              "required" : true,
              "description" : "Whether to bypass trash and force deletion.",
              "type" : "boolean"
            }
          }
        }
      ]
    },
    "\/jetpack\/v4\/plugins\/akismet\/activate" : {
      "endpoints" : [
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "POST",
        "PUT",
        "PATCH"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/plugins\/akismet\/activate"
      }
    },
    "\/wp\/v2\/block-renderer\/(?P<name>core\/search)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for core\/search block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/jetpack\/v4\/verify-site\/(?P<service>[a-z\\-_]+)" : {
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET",
        "POST",
        "PUT",
        "PATCH"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        },
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : {
            "keyring_id" : {
              "type" : "integer",
              "required" : true
            }
          }
        }
      ]
    },
    "\/jetpack\/v4\/marketing\/survey" : {
      "endpoints" : [
        {
          "methods" : [
            "POST"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "POST"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/marketing\/survey"
      }
    },
    "\/jetpack\/v4\/site\/benefits" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/site\/benefits"
      }
    },
    "\/jetpack\/v4\/identity-crisis\/confirm-safe-mode" : {
      "endpoints" : [
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "POST",
        "PUT",
        "PATCH"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/identity-crisis\/confirm-safe-mode"
      }
    },
    "\/jetpack\/v4\/identity-crisis\/migrate" : {
      "endpoints" : [
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "POST",
        "PUT",
        "PATCH"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/identity-crisis\/migrate"
      }
    },
    "\/wp\/v2\/jp_pay_order\/(?P<id>[\\d]+)\/autosaves" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "parent" : {
              "description" : "The ID for the parent of the object.",
              "type" : "integer",
              "required" : true
            }
          }
        },
        {
          "methods" : [
            "POST"
          ],
          "args" : {
            "parent" : {
              "description" : "The ID for the parent of the object.",
              "type" : "integer",
              "required" : true
            },
            "date_gmt" : {
              "description" : "The date the object was published, as GMT.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "slug" : {
              "description" : "An alphanumeric identifier for the object unique to its type.",
              "type" : "string",
              "required" : true
            },
            "status" : {
              "enum" : [
                "publish",
                "future",
                "draft",
                "pending",
                "private",
                "acf-disabled"
              ],
              "required" : true,
              "description" : "A named status for the object.",
              "type" : "string"
            },
            "password" : {
              "description" : "A password to protect access to the content and excerpt.",
              "type" : "string",
              "required" : true
            },
            "excerpt" : {
              "description" : "The excerpt for the object.",
              "type" : "object",
              "required" : true
            },
            "date" : {
              "description" : "The date the object was published, in the site's timezone.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "meta" : {
              "description" : "Meta fields.",
              "type" : "object",
              "required" : true
            },
            "template" : {
              "description" : "The theme file to use to display the object.",
              "type" : "string",
              "required" : true
            }
          }
        }
      ]
    },
    "\/wp\/v2\/tags\/(?P<id>[\\d]+)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the term.",
              "type" : "integer",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            }
          }
        },
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the term.",
              "type" : "integer",
              "required" : true
            },
            "slug" : {
              "description" : "An alphanumeric identifier for the term unique to its type.",
              "type" : "string",
              "required" : true
            },
            "meta" : {
              "description" : "Meta fields.",
              "type" : "object",
              "required" : true
            },
            "description" : {
              "description" : "HTML description of the term.",
              "type" : "string",
              "required" : true
            },
            "name" : {
              "description" : "HTML title for the term.",
              "type" : "string",
              "required" : true
            }
          }
        },
        {
          "methods" : [
            "DELETE"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the term.",
              "type" : "integer",
              "required" : true
            },
            "force" : {
              "default" : true,
              "required" : true,
              "description" : "Required to be true, as terms do not support trashing.",
              "type" : "boolean"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/block-renderer\/(?P<name>jetpack\/mailchimp)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for jetpack\/mailchimp block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/block-renderer\/(?P<name>jetpack\/recurring-payments)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for jetpack\/recurring-payments block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/block-renderer\/(?P<name>jetpack\/opentable)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for jetpack\/opentable block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/types\/(?P<type>[\\w-]+)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "type" : {
              "description" : "An alphanumeric identifier for the post type.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            }
          }
        }
      ]
    },
    "\/jetpack\/v4\/widgets\/(?P<id>[0-9a-z\\-_]+)" : {
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ]
    },
    "\/jetpack\/v4\/module\/all\/active" : {
      "endpoints" : [
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : {
            "modules" : {
              "default" : "",
              "items" : {
                "type" : "string"
              },
              "required" : true,
              "type" : "array"
            },
            "active" : {
              "default" : true,
              "type" : "boolean",
              "required" : true
            }
          }
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "POST",
        "PUT",
        "PATCH"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/module\/all\/active"
      }
    },
    "\/wp\/v2\/comments\/(?P<id>[\\d]+)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the object.",
              "type" : "integer",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "password" : {
              "description" : "The password for the parent post of the comment (if the post is password protected).",
              "type" : "string",
              "required" : true
            }
          }
        },
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the object.",
              "type" : "integer",
              "required" : true
            },
            "content" : {
              "description" : "The content for the object.",
              "type" : "object",
              "required" : true
            },
            "status" : {
              "description" : "State of the object.",
              "type" : "string",
              "required" : true
            },
            "author" : {
              "description" : "The ID of the user object, if author was a user.",
              "type" : "integer",
              "required" : true
            },
            "author_ip" : {
              "description" : "IP address for the object author.",
              "type" : "string",
              "required" : true
            },
            "date_gmt" : {
              "description" : "The date the object was published, as GMT.",
              "type" : "string",
              "required" : true
            },
            "author_url" : {
              "description" : "URL for the object author.",
              "type" : "string",
              "required" : true
            },
            "parent" : {
              "description" : "The ID for the parent of the object.",
              "type" : "integer",
              "required" : true
            },
            "date" : {
              "description" : "The date the object was published, in the site's timezone.",
              "type" : "string",
              "required" : true
            },
            "meta" : {
              "description" : "Meta fields.",
              "type" : "object",
              "required" : true
            },
            "author_name" : {
              "description" : "Display name for the object author.",
              "type" : "string",
              "required" : true
            },
            "author_email" : {
              "description" : "Email address for the object author.",
              "type" : "string",
              "required" : true
            },
            "post" : {
              "description" : "The ID of the associated post object.",
              "type" : "integer",
              "required" : true
            },
            "author_user_agent" : {
              "description" : "User agent for the object author.",
              "type" : "string",
              "required" : true
            }
          }
        },
        {
          "methods" : [
            "DELETE"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the object.",
              "type" : "integer",
              "required" : true
            },
            "force" : {
              "default" : true,
              "required" : true,
              "description" : "Whether to bypass trash and force deletion.",
              "type" : "boolean"
            },
            "password" : {
              "description" : "The password for the parent post of the comment (if the post is password protected).",
              "type" : "string",
              "required" : true
            }
          }
        }
      ]
    },
    "\/wpcom\/v2\/hello" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "wpcom\/v2",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wpcom\/v2\/hello"
      }
    },
    "\/wp\/v2\/media" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "before" : {
              "description" : "Limit response to posts published before a given ISO8601 compliant date.",
              "type" : "string",
              "required" : true
            },
            "parent_exclude" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to all items except those of a particular parent ID.",
              "type" : "array"
            },
            "author" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to posts assigned to specific authors.",
              "type" : "array"
            },
            "media_type" : {
              "enum" : [
                "image",
                "video",
                "text",
                "application",
                "audio"
              ],
              "required" : true,
              "description" : "Limit result set to attachments of a particular media type.",
              "type" : "string"
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "orderby" : {
              "default" : "date",
              "enum" : [
                "author",
                "date",
                "id",
                "include",
                "modified",
                "parent",
                "relevance",
                "slug",
                "include_slugs",
                "title"
              ],
              "required" : true,
              "description" : "Sort collection by object attribute.",
              "type" : "string"
            },
            "parent" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to items with particular parent IDs.",
              "type" : "array"
            },
            "author_exclude" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Ensure result set excludes posts assigned to specific authors.",
              "type" : "array"
            },
            "mime_type" : {
              "description" : "Limit result set to attachments of a particular MIME type.",
              "type" : "string",
              "required" : true
            },
            "include" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to specific IDs.",
              "type" : "array"
            },
            "per_page" : {
              "default" : 10,
              "required" : true,
              "description" : "Maximum number of items to be returned in result set.",
              "type" : "integer"
            },
            "offset" : {
              "description" : "Offset the result set by a specific number of items.",
              "type" : "integer",
              "required" : true
            },
            "after" : {
              "description" : "Limit response to posts published after a given ISO8601 compliant date.",
              "type" : "string",
              "required" : true
            },
            "search" : {
              "description" : "Limit results to those matching a string.",
              "type" : "string",
              "required" : true
            },
            "page" : {
              "default" : 1,
              "required" : true,
              "description" : "Current page of the collection.",
              "type" : "integer"
            },
            "exclude" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Ensure result set excludes specific IDs.",
              "type" : "array"
            },
            "order" : {
              "default" : "desc",
              "enum" : [
                "asc",
                "desc"
              ],
              "required" : true,
              "description" : "Order sort attribute ascending or descending.",
              "type" : "string"
            },
            "slug" : {
              "items" : {
                "type" : "string"
              },
              "required" : true,
              "description" : "Limit result set to posts with one or more specific slugs.",
              "type" : "array"
            },
            "status" : {
              "default" : "inherit",
              "items" : {
                "type" : "string",
                "enum" : [
                  "inherit",
                  "private",
                  "trash"
                ]
              },
              "required" : true,
              "description" : "Limit result set to posts assigned one or more statuses.",
              "type" : "array"
            }
          }
        },
        {
          "methods" : [
            "POST"
          ],
          "args" : {
            "description" : {
              "description" : "The attachment description.",
              "type" : "object",
              "required" : true
            },
            "caption" : {
              "description" : "The attachment caption.",
              "type" : "object",
              "required" : true
            },
            "template" : {
              "description" : "The theme file to use to display the object.",
              "type" : "string",
              "required" : true
            },
            "date_gmt" : {
              "description" : "The date the object was published, as GMT.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "author" : {
              "description" : "The ID for the author of the object.",
              "type" : "integer",
              "required" : true
            },
            "comment_status" : {
              "enum" : [
                "open",
                "closed"
              ],
              "required" : true,
              "description" : "Whether or not comments are open on the object.",
              "type" : "string"
            },
            "ping_status" : {
              "enum" : [
                "open",
                "closed"
              ],
              "required" : true,
              "description" : "Whether or not the object can be pinged.",
              "type" : "string"
            },
            "title" : {
              "description" : "The title for the object.",
              "type" : "object",
              "required" : true
            },
            "alt_text" : {
              "description" : "Alternative text to display when attachment is not displayed.",
              "type" : "string",
              "required" : true
            },
            "date" : {
              "description" : "The date the object was published, in the site's timezone.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "slug" : {
              "description" : "An alphanumeric identifier for the object unique to its type.",
              "type" : "string",
              "required" : true
            },
            "meta" : {
              "description" : "Meta fields.",
              "type" : "object",
              "required" : true
            },
            "status" : {
              "enum" : [
                "publish",
                "future",
                "draft",
                "pending",
                "private",
                "acf-disabled"
              ],
              "required" : true,
              "description" : "A named status for the object.",
              "type" : "string"
            },
            "post" : {
              "description" : "The ID for the associated post of the attachment.",
              "type" : "integer",
              "required" : true
            }
          }
        }
      ],
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wp\/v2\/media"
      }
    },
    "\/wp\/v2\/pages\/(?P<parent>[\\d]+)\/autosaves\/(?P<id>[\\d]+)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "id" : {
              "description" : "The ID for the object.",
              "type" : "integer",
              "required" : true
            },
            "parent" : {
              "description" : "The ID for the parent of the object.",
              "type" : "integer",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            }
          }
        }
      ]
    },
    "\/jetpack\/v4\/connection\/data" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/connection\/data"
      }
    },
    "\/wpcom\/v2\/service-api-keys\/(?P<service>[a-z\\-_]+)" : {
      "namespace" : "wpcom\/v2",
      "methods" : [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        },
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : {
            "service_api_key" : {
              "type" : "text",
              "required" : true
            }
          }
        },
        {
          "methods" : [
            "DELETE"
          ],
          "args" : [

          ]
        }
      ]
    },
    "\/jetpack\/v4\/site" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/site"
      }
    },
    "\/wp\/v2\/users" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "roles" : {
              "items" : {
                "type" : "string"
              },
              "required" : true,
              "description" : "Limit result set to users matching at least one specific role provided. Accepts csv list or single role.",
              "type" : "array"
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "orderby" : {
              "default" : "name",
              "enum" : [
                "id",
                "include",
                "name",
                "registered_date",
                "slug",
                "include_slugs",
                "email",
                "url"
              ],
              "required" : true,
              "description" : "Sort collection by object attribute.",
              "type" : "string"
            },
            "who" : {
              "enum" : [
                "authors"
              ],
              "required" : true,
              "description" : "Limit result set to users who are considered authors.",
              "type" : "string"
            },
            "include" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to specific IDs.",
              "type" : "array"
            },
            "per_page" : {
              "default" : 10,
              "required" : true,
              "description" : "Maximum number of items to be returned in result set.",
              "type" : "integer"
            },
            "offset" : {
              "description" : "Offset the result set by a specific number of items.",
              "type" : "integer",
              "required" : true
            },
            "order" : {
              "default" : "asc",
              "enum" : [
                "asc",
                "desc"
              ],
              "required" : true,
              "description" : "Order sort attribute ascending or descending.",
              "type" : "string"
            },
            "search" : {
              "description" : "Limit results to those matching a string.",
              "type" : "string",
              "required" : true
            },
            "page" : {
              "default" : 1,
              "required" : true,
              "description" : "Current page of the collection.",
              "type" : "integer"
            },
            "exclude" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Ensure result set excludes specific IDs.",
              "type" : "array"
            },
            "slug" : {
              "items" : {
                "type" : "string"
              },
              "required" : true,
              "description" : "Limit result set to users with one or more specific slugs.",
              "type" : "array"
            }
          }
        },
        {
          "methods" : [
            "POST"
          ],
          "args" : {
            "description" : {
              "description" : "Description of the user.",
              "type" : "string",
              "required" : true
            },
            "roles" : {
              "items" : {
                "type" : "string"
              },
              "required" : true,
              "description" : "Roles assigned to the user.",
              "type" : "array"
            },
            "url" : {
              "description" : "URL of the user.",
              "type" : "string",
              "required" : true
            },
            "locale" : {
              "enum" : [
                "",
                "en_US"
              ],
              "required" : true,
              "description" : "Locale for the user.",
              "type" : "string"
            },
            "password" : {
              "description" : "Password for the user (never included).",
              "type" : "string",
              "required" : true
            },
            "first_name" : {
              "description" : "First name for the user.",
              "type" : "string",
              "required" : true
            },
            "slug" : {
              "description" : "An alphanumeric identifier for the user.",
              "type" : "string",
              "required" : true
            },
            "username" : {
              "description" : "Login name for the user.",
              "type" : "string",
              "required" : true
            },
            "meta" : {
              "description" : "Meta fields.",
              "type" : "object",
              "required" : true
            },
            "last_name" : {
              "description" : "Last name for the user.",
              "type" : "string",
              "required" : true
            },
            "email" : {
              "description" : "The email address for the user.",
              "type" : "string",
              "required" : true
            },
            "name" : {
              "description" : "Display name for the user.",
              "type" : "string",
              "required" : true
            },
            "nickname" : {
              "description" : "The nickname for the user.",
              "type" : "string",
              "required" : true
            }
          }
        }
      ],
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wp\/v2\/users"
      }
    },
    "\/jetpack\/v4\/module\/(?P<slug>[a-z\\-]+)" : {
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET",
        "POST",
        "PUT",
        "PATCH"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        },
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : {
            "jetpack_testimonial_posts_per_page" : {
              "default" : 10,
              "required" : true,
              "description" : "Number of entries to show at most in Testimonial pages.",
              "type" : "integer"
            },
            "jetpack_sso_match_by_email" : {
              "default" : 0,
              "required" : true,
              "description" : "Match by Email",
              "type" : "boolean"
            },
            "wordpress_api_key" : {
              "default" : "",
              "required" : true,
              "description" : "",
              "type" : "string"
            },
            "blog_id" : {
              "default" : 0,
              "required" : true,
              "description" : "Blog ID.",
              "type" : "boolean"
            },
            "seo-tools" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "lang_id" : {
              "default" : "en_US",
              "required" : true,
              "description" : "Primary language for the site.",
              "type" : "string"
            },
            "jetpack_portfolio" : {
              "default" : 0,
              "required" : true,
              "description" : "Enable or disable Jetpack portfolio post type.",
              "type" : "boolean"
            },
            "stc_enabled" : {
              "default" : 1,
              "required" : true,
              "description" : "Show a &lt;em&gt;&#039;follow comments&#039;&lt;\/em&gt; option in the comment form",
              "type" : "boolean"
            },
            "sharing_delete_service" : {
              "default" : "",
              "required" : true,
              "description" : "Delete custom sharing service.",
              "type" : "string"
            },
            "copy-post" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "count_roles" : {
              "default" : [
                "administrator"
              ],
              "items" : {
                "type" : "string"
              },
              "required" : true,
              "description" : "Count the page views of registered users who are logged in.",
              "type" : "array"
            },
            "dismiss_empty_stats_card" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "custom-css" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "verification-tools" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "jetpack_comment_form_color_scheme" : {
              "default" : "light",
              "enum" : [
                "light",
                "dark",
                "transparent"
              ],
              "required" : true,
              "description" : "Color scheme",
              "type" : "string"
            },
            "carousel_display_exif" : {
              "default" : 0,
              "required" : true,
              "description" : "Show photo metadata (<a href=\"https:\/\/en.wikipedia.org\/wiki\/Exchangeable_image_file_format\" target=\"_blank\">Exif<\/a>) in carousel, when available.",
              "type" : "boolean"
            },
            "post-by-email" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "publicize" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "custom" : {
              "default" : {
                "sharing_name" : "",
                "sharing_url" : "",
                "sharing_icon" : ""
              },
              "required" : true,
              "description" : "Custom sharing services added by user.",
              "type" : "object"
            },
            "sso" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "version" : {
              "default" : 9,
              "required" : true,
              "description" : "Version.",
              "type" : "integer"
            },
            "highlander_comment_form_prompt" : {
              "default" : "Leave a Reply",
              "required" : true,
              "description" : "Greeting Text",
              "type" : "string"
            },
            "dismiss_dash_app_card" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "subscriptions" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "wordads_display_page" : {
              "default" : 1,
              "required" : true,
              "description" : "Display ads on pages?",
              "type" : "boolean"
            },
            "wordads_display_archive" : {
              "default" : 1,
              "required" : true,
              "description" : "Display ads on archive pages?",
              "type" : "boolean"
            },
            "bing" : {
              "default" : "",
              "required" : true,
              "description" : "Bing Webmaster Center",
              "type" : "string"
            },
            "button_style" : {
              "default" : "icon",
              "enum" : [
                "icon-text",
                "icon",
                "text",
                "official"
              ],
              "required" : true,
              "description" : "Button Style",
              "type" : "string"
            },
            "admin_bar" : {
              "default" : 1,
              "required" : true,
              "description" : "Include a small chart in your admin bar with a 48-hour traffic snapshot.",
              "type" : "boolean"
            },
            "json-api" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "stats" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "sharing_services" : {
              "default" : {
                "visible" : [
                  "twitter",
                  "facebook",
                  "google-plus-1"
                ],
                "hidden" : [

                ]
              },
              "required" : true,
              "description" : "Enabled Services and those hidden behind a button",
              "type" : "object"
            },
            "social_notifications_subscribe" : {
              "default" : 0,
              "required" : true,
              "description" : "Send email notification when someone follows my blog",
              "type" : "boolean"
            },
            "infinite-scroll" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "latex" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "wpcom_publish_comments_with_markdown" : {
              "default" : 0,
              "required" : true,
              "description" : "Use Markdown for comments.",
              "type" : "boolean"
            },
            "wordads_second_belowpost" : {
              "default" : 1,
              "required" : true,
              "description" : "Display second ad below post?",
              "type" : "boolean"
            },
            "do_not_track" : {
              "default" : 1,
              "required" : true,
              "description" : "Do not track.",
              "type" : "boolean"
            },
            "enable_header_ad" : {
              "default" : 1,
              "required" : true,
              "description" : "Display an ad unit at the top of each page.",
              "type" : "boolean"
            },
            "jetpack_sso_require_two_step" : {
              "default" : 0,
              "required" : true,
              "description" : "Require Two-Step Authentication",
              "type" : "boolean"
            },
            "enhanced-distribution" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "carousel_background_color" : {
              "default" : "black",
              "enum" : [
                "black",
                "white"
              ],
              "required" : true,
              "description" : "Color scheme.",
              "type" : "string"
            },
            "google-analytics" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "jetpack_protect_global_whitelist" : {
              "default" : "",
              "required" : true,
              "description" : "Protect global whitelist",
              "type" : "string"
            },
            "gravatar-hovercards" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "photon-cdn" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "comment-likes" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "post_by_email_address" : {
              "default" : "noop",
              "enum" : [
                "noop",
                "create",
                "regenerate",
                "delete"
              ],
              "required" : true,
              "description" : "Email Address",
              "type" : "string"
            },
            "gravatar_disable_hovercards" : {
              "default" : "enabled",
              "enum" : [
                "enabled",
                "disabled"
              ],
              "required" : true,
              "description" : "View people&#039;s profiles when you mouse over their Gravatars",
              "type" : "string"
            },
            "jetpack-twitter-cards-site-tag" : {
              "default" : "",
              "required" : true,
              "description" : "The Twitter username of the owner of this site&#039;s domain.",
              "type" : "string"
            },
            "infinite_scroll" : {
              "default" : 1,
              "required" : true,
              "description" : "To infinity and beyond",
              "type" : "boolean"
            },
            "show_headline" : {
              "default" : 1,
              "required" : true,
              "description" : "Highlight related content with a heading",
              "type" : "boolean"
            },
            "wordads" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "markdown" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "tiled_galleries" : {
              "default" : 0,
              "required" : true,
              "description" : "Display all your gallery pictures in a cool mosaic.",
              "type" : "boolean"
            },
            "monitor_receive_notifications" : {
              "default" : 0,
              "required" : true,
              "description" : "Receive Monitor Email Notifications.",
              "type" : "boolean"
            },
            "social_notifications_like" : {
              "default" : 1,
              "required" : true,
              "description" : "Send email notification when someone likes a post",
              "type" : "boolean"
            },
            "related-posts" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "wordads_display_front_page" : {
              "default" : 1,
              "required" : true,
              "description" : "Display ads on the front page?",
              "type" : "boolean"
            },
            "hide_smile" : {
              "default" : 1,
              "required" : true,
              "description" : "Hide the stats smiley face image.",
              "type" : "boolean"
            },
            "custom-content-types" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "wpl_default" : {
              "default" : "on",
              "enum" : [
                "on",
                "off"
              ],
              "required" : true,
              "description" : "WordPress.com Likes are",
              "type" : "string"
            },
            "sharedaddy_disable_resources" : {
              "default" : 0,
              "required" : true,
              "description" : "Disable CSS and JS",
              "type" : "boolean"
            },
            "yandex" : {
              "default" : "",
              "required" : true,
              "description" : "Yandex Site Verification",
              "type" : "string"
            },
            "context" : {
              "default" : "edit",
              "required" : true
            },
            "jetpack_protect_key" : {
              "default" : "",
              "required" : true,
              "description" : "Protect API key",
              "type" : "string"
            },
            "google" : {
              "default" : "",
              "required" : true,
              "description" : "Google Search Console",
              "type" : "string"
            },
            "wordads_display_post" : {
              "default" : 1,
              "required" : true,
              "description" : "Display ads on posts?",
              "type" : "boolean"
            },
            "google_analytics_tracking_id" : {
              "default" : "",
              "required" : true,
              "description" : "Google Analytics",
              "type" : "string"
            },
            "widgets" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "search" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "wpcom_publish_posts_with_markdown" : {
              "default" : 0,
              "required" : true,
              "description" : "Use Markdown for posts.",
              "type" : "boolean"
            },
            "carousel" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "likes" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "widget-visibility" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "stb_enabled" : {
              "default" : 1,
              "required" : true,
              "description" : "Show a &lt;em&gt;&#039;follow blog&#039;&lt;\/em&gt; option in the comment form",
              "type" : "boolean"
            },
            "notes" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "jetpack_portfolio_posts_per_page" : {
              "default" : 10,
              "required" : true,
              "description" : "Number of entries to show at most in Portfolio pages.",
              "type" : "integer"
            },
            "protect" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "akismet_show_user_comments_approved" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "shortlinks" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "jetpack_testimonial" : {
              "default" : 0,
              "required" : true,
              "description" : "Enable or disable Jetpack testimonial post type.",
              "type" : "boolean"
            },
            "photon" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "masterbar" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "videopress" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "shortcodes" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "wordads_custom_adstxt" : {
              "default" : "",
              "required" : true,
              "description" : "Custom ads.txt entries",
              "type" : "string"
            },
            "sharedaddy" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "show" : {
              "default" : [
                "post"
              ],
              "items" : {
                "type" : "string"
              },
              "required" : true,
              "description" : "Views where buttons are shown",
              "type" : "array"
            },
            "lazy-images" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "comments" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "sharing_label" : {
              "default" : "",
              "required" : true,
              "description" : "Sharing Label",
              "type" : "string"
            },
            "show_thumbnails" : {
              "default" : 0,
              "required" : true,
              "description" : "Show a thumbnail image where available",
              "type" : "boolean"
            },
            "monitor" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "onboarding" : {
              "default" : {
                "businessAddress" : {
                  "state" : "",
                  "street" : "",
                  "name" : "",
                  "city" : "",
                  "zip" : ""
                },
                "homepageFormat" : "posts",
                "siteDescription" : "",
                "installWooCommerce" : true,
                "siteType" : "personal",
                "siteTitle" : "",
                "addContactForm" : 0
              },
              "required" : true,
              "description" : "",
              "type" : "object"
            },
            "pinterest" : {
              "default" : "",
              "required" : true,
              "description" : "Pinterest Site Verification",
              "type" : "string"
            },
            "wordads_approved" : {
              "default" : 0,
              "required" : true,
              "description" : "Is site approved for WordAds?",
              "type" : "boolean"
            },
            "roles" : {
              "default" : [
                "administrator"
              ],
              "items" : {
                "type" : "string"
              },
              "required" : true,
              "description" : "Select the roles that will be able to view stats reports.",
              "type" : "array"
            },
            "contact-form" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "infinite_scroll_google_analytics" : {
              "default" : 0,
              "required" : true,
              "description" : "Use Google Analytics with Infinite Scroll",
              "type" : "boolean"
            },
            "tiled-gallery" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "vaultpress" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/posts" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "categories" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to all items that have the specified term assigned in the categories taxonomy.",
              "type" : "array"
            },
            "slug" : {
              "items" : {
                "type" : "string"
              },
              "required" : true,
              "description" : "Limit result set to posts with one or more specific slugs.",
              "type" : "array"
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "before" : {
              "description" : "Limit response to posts published before a given ISO8601 compliant date.",
              "type" : "string",
              "required" : true
            },
            "status" : {
              "default" : "publish",
              "items" : {
                "type" : "string",
                "enum" : [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "trash",
                  "auto-draft",
                  "inherit",
                  "request-pending",
                  "request-confirmed",
                  "request-failed",
                  "request-completed",
                  "acf-disabled",
                  "any"
                ]
              },
              "required" : true,
              "description" : "Limit result set to posts assigned one or more statuses.",
              "type" : "array"
            },
            "sticky" : {
              "description" : "Limit result set to items that are sticky.",
              "type" : "boolean",
              "required" : true
            },
            "tags" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to all items that have the specified term assigned in the tags taxonomy.",
              "type" : "array"
            },
            "orderby" : {
              "default" : "date",
              "enum" : [
                "author",
                "date",
                "id",
                "include",
                "modified",
                "parent",
                "relevance",
                "slug",
                "include_slugs",
                "title"
              ],
              "required" : true,
              "description" : "Sort collection by object attribute.",
              "type" : "string"
            },
            "categories_exclude" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to all items except those that have the specified term assigned in the categories taxonomy.",
              "type" : "array"
            },
            "author_exclude" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Ensure result set excludes posts assigned to specific authors.",
              "type" : "array"
            },
            "after" : {
              "description" : "Limit response to posts published after a given ISO8601 compliant date.",
              "type" : "string",
              "required" : true
            },
            "offset" : {
              "description" : "Offset the result set by a specific number of items.",
              "type" : "integer",
              "required" : true
            },
            "per_page" : {
              "default" : 10,
              "required" : true,
              "description" : "Maximum number of items to be returned in result set.",
              "type" : "integer"
            },
            "page" : {
              "default" : 1,
              "required" : true,
              "description" : "Current page of the collection.",
              "type" : "integer"
            },
            "include" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to specific IDs.",
              "type" : "array"
            },
            "order" : {
              "default" : "desc",
              "enum" : [
                "asc",
                "desc"
              ],
              "required" : true,
              "description" : "Order sort attribute ascending or descending.",
              "type" : "string"
            },
            "exclude" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Ensure result set excludes specific IDs.",
              "type" : "array"
            },
            "tags_exclude" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to all items except those that have the specified term assigned in the tags taxonomy.",
              "type" : "array"
            },
            "search" : {
              "description" : "Limit results to those matching a string.",
              "type" : "string",
              "required" : true
            },
            "author" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to posts assigned to specific authors.",
              "type" : "array"
            }
          }
        },
        {
          "methods" : [
            "POST"
          ],
          "args" : {
            "categories" : {
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "The terms assigned to the object in the category taxonomy.",
              "type" : "array"
            },
            "sticky" : {
              "description" : "Whether or not the object should be treated as sticky.",
              "type" : "boolean",
              "required" : true
            },
            "template" : {
              "description" : "The theme file to use to display the object.",
              "type" : "string",
              "required" : true
            },
            "excerpt" : {
              "description" : "The excerpt for the object.",
              "type" : "object",
              "required" : true
            },
            "date_gmt" : {
              "description" : "The date the object was published, as GMT.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "author" : {
              "description" : "The ID for the author of the object.",
              "type" : "integer",
              "required" : true
            },
            "jetpack_publicize_connections" : {
              "default" : [

              ],
              "items" : {
                "properties" : {
                  "done" : {
                    "readonly" : true,
                    "description" : "Whether Publicize has already finished sharing for this post",
                    "type" : "boolean",
                    "context" : [
                      "edit"
                    ]
                  },
                  "id" : {
                    "readonly" : true,
                    "description" : "Unique identifier for the Publicize Connection",
                    "type" : "string",
                    "context" : [
                      "view",
                      "edit"
                    ]
                  },
                  "display_name" : {
                    "readonly" : true,
                    "description" : "Username of the connected account",
                    "type" : "string",
                    "context" : [
                      "view",
                      "edit"
                    ]
                  },
                  "enabled" : {
                    "type" : "boolean",
                    "context" : [
                      "edit"
                    ],
                    "description" : "Whether to share to this connection"
                  },
                  "toggleable" : {
                    "readonly" : true,
                    "description" : "Whether `enable` can be changed for this post\/connection",
                    "type" : "boolean",
                    "context" : [
                      "edit"
                    ]
                  },
                  "service_name" : {
                    "readonly" : true,
                    "description" : "Alphanumeric identifier for the Publicize Service",
                    "type" : "string",
                    "context" : [
                      "view",
                      "edit"
                    ]
                  }
                },
                "title" : "jetpack-publicize-post-connection",
                "type" : "object",
                "$schema" : "http:\/\/json-schema.org\/draft-04\/schema#"
              },
              "required" : true,
              "type" : "array"
            },
            "comment_status" : {
              "enum" : [
                "open",
                "closed"
              ],
              "required" : true,
              "description" : "Whether or not comments are open on the object.",
              "type" : "string"
            },
            "tags" : {
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "The terms assigned to the object in the post_tag taxonomy.",
              "type" : "array"
            },
            "ping_status" : {
              "enum" : [
                "open",
                "closed"
              ],
              "required" : true,
              "description" : "Whether or not the object can be pinged.",
              "type" : "string"
            },
            "title" : {
              "description" : "The title for the object.",
              "type" : "object",
              "required" : true
            },
            "date" : {
              "description" : "The date the object was published, in the site's timezone.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "password" : {
              "description" : "A password to protect access to the content and excerpt.",
              "type" : "string",
              "required" : true
            },
            "slug" : {
              "description" : "An alphanumeric identifier for the object unique to its type.",
              "type" : "string",
              "required" : true
            },
            "featured_media" : {
              "description" : "The ID of the featured media for the object.",
              "type" : "integer",
              "required" : true
            },
            "format" : {
              "enum" : [
                "standard",
                "aside",
                "chat",
                "gallery",
                "link",
                "image",
                "quote",
                "status",
                "video",
                "audio"
              ],
              "required" : true,
              "description" : "The format for the object.",
              "type" : "string"
            },
            "meta" : {
              "description" : "Meta fields.",
              "type" : "object",
              "required" : true
            },
            "status" : {
              "enum" : [
                "publish",
                "future",
                "draft",
                "pending",
                "private",
                "acf-disabled"
              ],
              "required" : true,
              "description" : "A named status for the object.",
              "type" : "string"
            },
            "content" : {
              "description" : "The content for the object.",
              "type" : "object",
              "required" : true
            }
          }
        }
      ],
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wp\/v2\/posts"
      }
    },
    "\/wp\/v2\/categories\/(?P<id>[\\d]+)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the term.",
              "type" : "integer",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            }
          }
        },
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the term.",
              "type" : "integer",
              "required" : true
            },
            "slug" : {
              "description" : "An alphanumeric identifier for the term unique to its type.",
              "type" : "string",
              "required" : true
            },
            "meta" : {
              "description" : "Meta fields.",
              "type" : "object",
              "required" : true
            },
            "description" : {
              "description" : "HTML description of the term.",
              "type" : "string",
              "required" : true
            },
            "name" : {
              "description" : "HTML title for the term.",
              "type" : "string",
              "required" : true
            },
            "parent" : {
              "description" : "The parent term ID.",
              "type" : "integer",
              "required" : true
            }
          }
        },
        {
          "methods" : [
            "DELETE"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the term.",
              "type" : "integer",
              "required" : true
            },
            "force" : {
              "default" : true,
              "required" : true,
              "description" : "Required to be true, as terms do not support trashing.",
              "type" : "boolean"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/themes" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "status" : {
              "items" : {
                "type" : "string",
                "enum" : [
                  "active"
                ]
              },
              "required" : true,
              "description" : "Limit result set to themes assigned one or more statuses.",
              "type" : "array"
            },
            "per_page" : {
              "default" : 10,
              "required" : true,
              "description" : "Maximum number of items to be returned in result set.",
              "type" : "integer"
            },
            "search" : {
              "description" : "Limit results to those matching a string.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string",
              "required" : true
            },
            "page" : {
              "default" : 1,
              "required" : true,
              "description" : "Current page of the collection.",
              "type" : "integer"
            }
          }
        }
      ],
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wp\/v2\/themes"
      }
    },
    "\/wp\/v2\/media\/(?P<id>[\\d]+)\/post-process" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "POST"
      ],
      "endpoints" : [
        {
          "methods" : [
            "POST"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the object.",
              "type" : "integer",
              "required" : true
            },
            "action" : {
              "enum" : [
                "create-image-subsizes"
              ],
              "type" : "string",
              "required" : true
            }
          }
        }
      ]
    },
    "\/wp\/v2\/settings" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        },
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : {
            "description" : {
              "description" : "Site tagline.",
              "type" : "string",
              "required" : true
            },
            "default_comment_status" : {
              "enum" : [
                "open",
                "closed"
              ],
              "required" : true,
              "description" : "Allow people to submit comments on new posts.",
              "type" : "string"
            },
            "date_format" : {
              "description" : "A date format for all date strings.",
              "type" : "string",
              "required" : true
            },
            "time_format" : {
              "description" : "A time format for all time strings.",
              "type" : "string",
              "required" : true
            },
            "start_of_week" : {
              "description" : "A day number of the week that the week should start on.",
              "type" : "integer",
              "required" : true
            },
            "posts_per_page" : {
              "description" : "Blog pages show at most.",
              "type" : "integer",
              "required" : true
            },
            "url" : {
              "description" : "Site URL.",
              "type" : "string",
              "required" : true
            },
            "default_post_format" : {
              "description" : "Default post format.",
              "type" : "string",
              "required" : true
            },
            "default_category" : {
              "description" : "Default post category.",
              "type" : "integer",
              "required" : true
            },
            "title" : {
              "description" : "Site title.",
              "type" : "string",
              "required" : true
            },
            "default_ping_status" : {
              "enum" : [
                "open",
                "closed"
              ],
              "required" : true,
              "description" : "Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.",
              "type" : "string"
            },
            "language" : {
              "description" : "WordPress locale code.",
              "type" : "string",
              "required" : true
            },
            "timezone" : {
              "description" : "A city in the same timezone as you.",
              "type" : "string",
              "required" : true
            },
            "use_smilies" : {
              "description" : "Convert emoticons like :-) and :-P to graphics on display.",
              "type" : "boolean",
              "required" : true
            },
            "email" : {
              "description" : "This address is used for admin purposes, like new user notification.",
              "type" : "string",
              "required" : true
            }
          }
        }
      ],
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST",
        "PUT",
        "PATCH"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wp\/v2\/settings"
      }
    },
    "\/wpcom\/v2\/memberships\/status" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "wpcom\/v2",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wpcom\/v2\/memberships\/status"
      }
    },
    "\/jetpack\/v4\/service-api-keys\/(?P<service>[a-z\\-_]+)" : {
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        },
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : {
            "service_api_key" : {
              "type" : "text",
              "required" : true
            }
          }
        },
        {
          "methods" : [
            "DELETE"
          ],
          "args" : [

          ]
        }
      ]
    },
    "\/wpcom\/v2" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "namespace" : {
              "default" : "wpcom\/v2",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "required" : true
            }
          }
        }
      ],
      "namespace" : "wpcom\/v2",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wpcom\/v2"
      }
    },
    "\/wp\/v2\/posts\/(?P<parent>[\\d]+)\/autosaves\/(?P<id>[\\d]+)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "id" : {
              "description" : "The ID for the object.",
              "type" : "integer",
              "required" : true
            },
            "parent" : {
              "description" : "The ID for the parent of the object.",
              "type" : "integer",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/block-renderer\/(?P<name>jetpack\/rating-star)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for jetpack\/rating-star block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/oembed\/1.0\/embed" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "url" : {
              "required" : true
            },
            "format" : {
              "default" : "json",
              "required" : true
            },
            "maxwidth" : {
              "default" : 600,
              "required" : true
            }
          }
        }
      ],
      "namespace" : "oembed\/1.0",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/oembed\/1.0\/embed"
      }
    },
    "\/wp\/v2\/posts\/(?P<id>[\\d]+)\/autosaves" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "parent" : {
              "description" : "The ID for the parent of the object.",
              "type" : "integer",
              "required" : true
            }
          }
        },
        {
          "methods" : [
            "POST"
          ],
          "args" : {
            "categories" : {
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "The terms assigned to the object in the category taxonomy.",
              "type" : "array"
            },
            "slug" : {
              "description" : "An alphanumeric identifier for the object unique to its type.",
              "type" : "string",
              "required" : true
            },
            "status" : {
              "enum" : [
                "publish",
                "future",
                "draft",
                "pending",
                "private",
                "acf-disabled"
              ],
              "required" : true,
              "description" : "A named status for the object.",
              "type" : "string"
            },
            "title" : {
              "description" : "The title for the object.",
              "type" : "object",
              "required" : true
            },
            "sticky" : {
              "description" : "Whether or not the object should be treated as sticky.",
              "type" : "boolean",
              "required" : true
            },
            "tags" : {
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "The terms assigned to the object in the post_tag taxonomy.",
              "type" : "array"
            },
            "comment_status" : {
              "enum" : [
                "open",
                "closed"
              ],
              "required" : true,
              "description" : "Whether or not comments are open on the object.",
              "type" : "string"
            },
            "jetpack_publicize_connections" : {
              "type" : "array",
              "items" : {
                "properties" : {
                  "done" : {
                    "readonly" : true,
                    "description" : "Whether Publicize has already finished sharing for this post",
                    "type" : "boolean",
                    "context" : [
                      "edit"
                    ]
                  },
                  "id" : {
                    "readonly" : true,
                    "description" : "Unique identifier for the Publicize Connection",
                    "type" : "string",
                    "context" : [
                      "view",
                      "edit"
                    ]
                  },
                  "display_name" : {
                    "readonly" : true,
                    "description" : "Username of the connected account",
                    "type" : "string",
                    "context" : [
                      "view",
                      "edit"
                    ]
                  },
                  "enabled" : {
                    "type" : "boolean",
                    "context" : [
                      "edit"
                    ],
                    "description" : "Whether to share to this connection"
                  },
                  "toggleable" : {
                    "readonly" : true,
                    "description" : "Whether `enable` can be changed for this post\/connection",
                    "type" : "boolean",
                    "context" : [
                      "edit"
                    ]
                  },
                  "service_name" : {
                    "readonly" : true,
                    "description" : "Alphanumeric identifier for the Publicize Service",
                    "type" : "string",
                    "context" : [
                      "view",
                      "edit"
                    ]
                  }
                },
                "title" : "jetpack-publicize-post-connection",
                "type" : "object",
                "$schema" : "http:\/\/json-schema.org\/draft-04\/schema#"
              },
              "required" : true
            },
            "template" : {
              "description" : "The theme file to use to display the object.",
              "type" : "string",
              "required" : true
            },
            "parent" : {
              "description" : "The ID for the parent of the object.",
              "type" : "integer",
              "required" : true
            },
            "meta" : {
              "description" : "Meta fields.",
              "type" : "object",
              "required" : true
            },
            "date_gmt" : {
              "description" : "The date the object was published, as GMT.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "date" : {
              "description" : "The date the object was published, in the site's timezone.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "featured_media" : {
              "description" : "The ID of the featured media for the object.",
              "type" : "integer",
              "required" : true
            },
            "format" : {
              "enum" : [
                "standard",
                "aside",
                "chat",
                "gallery",
                "link",
                "image",
                "quote",
                "status",
                "video",
                "audio"
              ],
              "required" : true,
              "description" : "The format for the object.",
              "type" : "string"
            },
            "excerpt" : {
              "description" : "The excerpt for the object.",
              "type" : "object",
              "required" : true
            },
            "password" : {
              "description" : "A password to protect access to the content and excerpt.",
              "type" : "string",
              "required" : true
            },
            "ping_status" : {
              "enum" : [
                "open",
                "closed"
              ],
              "required" : true,
              "description" : "Whether or not the object can be pinged.",
              "type" : "string"
            },
            "content" : {
              "description" : "The content for the object.",
              "type" : "object",
              "required" : true
            },
            "author" : {
              "description" : "The ID for the author of the object.",
              "type" : "integer",
              "required" : true
            }
          }
        }
      ]
    },
    "\/wp\/v2\/block-renderer\/(?P<name>jetpack\/business-hours)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for jetpack\/business-hours block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/jetpack\/v4\/identity-crisis\/start-fresh" : {
      "endpoints" : [
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "POST",
        "PUT",
        "PATCH"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/identity-crisis\/start-fresh"
      }
    },
    "\/jetpack\/v4\/remote_authorize" : {
      "endpoints" : [
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "POST",
        "PUT",
        "PATCH"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/remote_authorize"
      }
    },
    "\/wp\/v2\/block-renderer\/(?P<name>jetpack\/eventbrite)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for jetpack\/eventbrite block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/block-renderer\/(?P<name>core\/video)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for core\/video block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/block-renderer\/(?P<name>core\/tag-cloud)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for core\/tag-cloud block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/jetpack\/v4\/updates\/plugins" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/updates\/plugins"
      }
    },
    "\/wp\/v2\/jp_pay_product" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "before" : {
              "description" : "Limit response to posts published before a given ISO8601 compliant date.",
              "type" : "string",
              "required" : true
            },
            "author" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to posts assigned to specific authors.",
              "type" : "array"
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "orderby" : {
              "default" : "date",
              "enum" : [
                "author",
                "date",
                "id",
                "include",
                "modified",
                "parent",
                "relevance",
                "slug",
                "include_slugs",
                "title"
              ],
              "required" : true,
              "description" : "Sort collection by object attribute.",
              "type" : "string"
            },
            "author_exclude" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Ensure result set excludes posts assigned to specific authors.",
              "type" : "array"
            },
            "include" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to specific IDs.",
              "type" : "array"
            },
            "per_page" : {
              "default" : 10,
              "required" : true,
              "description" : "Maximum number of items to be returned in result set.",
              "type" : "integer"
            },
            "offset" : {
              "description" : "Offset the result set by a specific number of items.",
              "type" : "integer",
              "required" : true
            },
            "after" : {
              "description" : "Limit response to posts published after a given ISO8601 compliant date.",
              "type" : "string",
              "required" : true
            },
            "search" : {
              "description" : "Limit results to those matching a string.",
              "type" : "string",
              "required" : true
            },
            "page" : {
              "default" : 1,
              "required" : true,
              "description" : "Current page of the collection.",
              "type" : "integer"
            },
            "exclude" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Ensure result set excludes specific IDs.",
              "type" : "array"
            },
            "order" : {
              "default" : "desc",
              "enum" : [
                "asc",
                "desc"
              ],
              "required" : true,
              "description" : "Order sort attribute ascending or descending.",
              "type" : "string"
            },
            "slug" : {
              "items" : {
                "type" : "string"
              },
              "required" : true,
              "description" : "Limit result set to posts with one or more specific slugs.",
              "type" : "array"
            },
            "status" : {
              "default" : "publish",
              "items" : {
                "type" : "string",
                "enum" : [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "trash",
                  "auto-draft",
                  "inherit",
                  "request-pending",
                  "request-confirmed",
                  "request-failed",
                  "request-completed",
                  "acf-disabled",
                  "any"
                ]
              },
              "required" : true,
              "description" : "Limit result set to posts assigned one or more statuses.",
              "type" : "array"
            }
          }
        },
        {
          "methods" : [
            "POST"
          ],
          "args" : {
            "slug" : {
              "description" : "An alphanumeric identifier for the object unique to its type.",
              "type" : "string",
              "required" : true
            },
            "date_gmt" : {
              "description" : "The date the object was published, as GMT.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "status" : {
              "enum" : [
                "publish",
                "future",
                "draft",
                "pending",
                "private",
                "acf-disabled"
              ],
              "required" : true,
              "description" : "A named status for the object.",
              "type" : "string"
            },
            "password" : {
              "description" : "A password to protect access to the content and excerpt.",
              "type" : "string",
              "required" : true
            },
            "content" : {
              "description" : "The content for the object.",
              "type" : "object",
              "required" : true
            },
            "title" : {
              "description" : "The title for the object.",
              "type" : "object",
              "required" : true
            },
            "date" : {
              "description" : "The date the object was published, in the site's timezone.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "author" : {
              "description" : "The ID for the author of the object.",
              "type" : "integer",
              "required" : true
            },
            "featured_media" : {
              "description" : "The ID of the featured media for the object.",
              "type" : "integer",
              "required" : true
            },
            "meta" : {
              "description" : "Meta fields.",
              "type" : "object",
              "required" : true
            },
            "template" : {
              "description" : "The theme file to use to display the object.",
              "type" : "string",
              "required" : true
            }
          }
        }
      ],
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wp\/v2\/jp_pay_product"
      }
    },
    "\/wp\/v2\/jp_pay_product\/(?P<id>[\\d]+)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the object.",
              "type" : "integer",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "password" : {
              "description" : "The password for the post if it is password protected.",
              "type" : "string",
              "required" : true
            }
          }
        },
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the object.",
              "type" : "integer",
              "required" : true
            },
            "template" : {
              "description" : "The theme file to use to display the object.",
              "type" : "string",
              "required" : true
            },
            "date_gmt" : {
              "description" : "The date the object was published, as GMT.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "author" : {
              "description" : "The ID for the author of the object.",
              "type" : "integer",
              "required" : true
            },
            "title" : {
              "description" : "The title for the object.",
              "type" : "object",
              "required" : true
            },
            "date" : {
              "description" : "The date the object was published, in the site's timezone.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "password" : {
              "description" : "A password to protect access to the content and excerpt.",
              "type" : "string",
              "required" : true
            },
            "slug" : {
              "description" : "An alphanumeric identifier for the object unique to its type.",
              "type" : "string",
              "required" : true
            },
            "featured_media" : {
              "description" : "The ID of the featured media for the object.",
              "type" : "integer",
              "required" : true
            },
            "meta" : {
              "description" : "Meta fields.",
              "type" : "object",
              "required" : true
            },
            "status" : {
              "enum" : [
                "publish",
                "future",
                "draft",
                "pending",
                "private",
                "acf-disabled"
              ],
              "required" : true,
              "description" : "A named status for the object.",
              "type" : "string"
            },
            "content" : {
              "description" : "The content for the object.",
              "type" : "object",
              "required" : true
            }
          }
        },
        {
          "methods" : [
            "DELETE"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the object.",
              "type" : "integer",
              "required" : true
            },
            "force" : {
              "default" : true,
              "required" : true,
              "description" : "Whether to bypass trash and force deletion.",
              "type" : "boolean"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/statuses\/(?P<status>[\\w-]+)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "status" : {
              "description" : "An alphanumeric identifier for the status.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            }
          }
        }
      ]
    },
    "\/wpcom\/v2\/publicize\/connections" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "wpcom\/v2",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wpcom\/v2\/publicize\/connections"
      }
    },
    "\/jetpack\/v4\/mobile\/send-login-email" : {
      "endpoints" : [
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "POST",
        "PUT",
        "PATCH"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/mobile\/send-login-email"
      }
    },
    "\/wp\/v2\/block-renderer\/(?P<name>core\/latest-posts)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for core\/latest-posts block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/search" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "subtype" : {
              "default" : "any",
              "items" : {
                "type" : "string",
                "enum" : [
                  "post",
                  "page",
                  "any"
                ]
              },
              "required" : true,
              "description" : "Limit results to items of one or more object subtypes.",
              "type" : "array"
            },
            "per_page" : {
              "default" : 10,
              "required" : true,
              "description" : "Maximum number of items to be returned in result set.",
              "type" : "integer"
            },
            "search" : {
              "description" : "Limit results to those matching a string.",
              "type" : "string",
              "required" : true
            },
            "type" : {
              "default" : "post",
              "enum" : [
                "post"
              ],
              "required" : true,
              "description" : "Limit results to items of an object type.",
              "type" : "string"
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "page" : {
              "default" : 1,
              "required" : true,
              "description" : "Current page of the collection.",
              "type" : "integer"
            }
          }
        }
      ],
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wp\/v2\/search"
      }
    },
    "\/wp\/v2\/jp_pay_product\/(?P<parent>[\\d]+)\/autosaves\/(?P<id>[\\d]+)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "id" : {
              "description" : "The ID for the object.",
              "type" : "integer",
              "required" : true
            },
            "parent" : {
              "description" : "The ID for the parent of the object.",
              "type" : "integer",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            }
          }
        }
      ]
    },
    "\/jetpack\/v4\/plugin\/(?P<plugin>[a-z\\\/\\.\\-_]+)" : {
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ]
    },
    "\/wp\/v2\/pages\/(?P<parent>[\\d]+)\/revisions\/(?P<id>[\\d]+)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "DELETE"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the object.",
              "type" : "integer",
              "required" : true
            },
            "parent" : {
              "description" : "The ID for the parent of the object.",
              "type" : "integer",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            }
          }
        },
        {
          "methods" : [
            "DELETE"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the object.",
              "type" : "integer",
              "required" : true
            },
            "parent" : {
              "description" : "The ID for the parent of the object.",
              "type" : "integer",
              "required" : true
            },
            "force" : {
              "default" : true,
              "required" : true,
              "description" : "Required to be true, as revisions do not support trashing.",
              "type" : "boolean"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/users\/(?P<id>[\\d]+)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the user.",
              "type" : "integer",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            }
          }
        },
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the user.",
              "type" : "integer",
              "required" : true
            },
            "description" : {
              "description" : "Description of the user.",
              "type" : "string",
              "required" : true
            },
            "roles" : {
              "items" : {
                "type" : "string"
              },
              "required" : true,
              "description" : "Roles assigned to the user.",
              "type" : "array"
            },
            "url" : {
              "description" : "URL of the user.",
              "type" : "string",
              "required" : true
            },
            "locale" : {
              "enum" : [
                "",
                "en_US"
              ],
              "required" : true,
              "description" : "Locale for the user.",
              "type" : "string"
            },
            "password" : {
              "description" : "Password for the user (never included).",
              "type" : "string",
              "required" : true
            },
            "first_name" : {
              "description" : "First name for the user.",
              "type" : "string",
              "required" : true
            },
            "slug" : {
              "description" : "An alphanumeric identifier for the user.",
              "type" : "string",
              "required" : true
            },
            "username" : {
              "description" : "Login name for the user.",
              "type" : "string",
              "required" : true
            },
            "meta" : {
              "description" : "Meta fields.",
              "type" : "object",
              "required" : true
            },
            "last_name" : {
              "description" : "Last name for the user.",
              "type" : "string",
              "required" : true
            },
            "email" : {
              "description" : "The email address for the user.",
              "type" : "string",
              "required" : true
            },
            "name" : {
              "description" : "Display name for the user.",
              "type" : "string",
              "required" : true
            },
            "nickname" : {
              "description" : "The nickname for the user.",
              "type" : "string",
              "required" : true
            }
          }
        },
        {
          "methods" : [
            "DELETE"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the user.",
              "type" : "integer",
              "required" : true
            },
            "force" : {
              "default" : true,
              "required" : true,
              "description" : "Required to be true, as users do not support trashing.",
              "type" : "boolean"
            },
            "reassign" : {
              "description" : "Reassign the deleted user's posts and links to this user ID.",
              "type" : "integer",
              "required" : true
            }
          }
        }
      ]
    },
    "\/wp\/v2\/media\/(?P<id>[\\d]+)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the object.",
              "type" : "integer",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            }
          }
        },
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the object.",
              "type" : "integer",
              "required" : true
            },
            "description" : {
              "description" : "The attachment description.",
              "type" : "object",
              "required" : true
            },
            "caption" : {
              "description" : "The attachment caption.",
              "type" : "object",
              "required" : true
            },
            "template" : {
              "description" : "The theme file to use to display the object.",
              "type" : "string",
              "required" : true
            },
            "date_gmt" : {
              "description" : "The date the object was published, as GMT.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "author" : {
              "description" : "The ID for the author of the object.",
              "type" : "integer",
              "required" : true
            },
            "comment_status" : {
              "enum" : [
                "open",
                "closed"
              ],
              "required" : true,
              "description" : "Whether or not comments are open on the object.",
              "type" : "string"
            },
            "ping_status" : {
              "enum" : [
                "open",
                "closed"
              ],
              "required" : true,
              "description" : "Whether or not the object can be pinged.",
              "type" : "string"
            },
            "title" : {
              "description" : "The title for the object.",
              "type" : "object",
              "required" : true
            },
            "alt_text" : {
              "description" : "Alternative text to display when attachment is not displayed.",
              "type" : "string",
              "required" : true
            },
            "date" : {
              "description" : "The date the object was published, in the site's timezone.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "slug" : {
              "description" : "An alphanumeric identifier for the object unique to its type.",
              "type" : "string",
              "required" : true
            },
            "meta" : {
              "description" : "Meta fields.",
              "type" : "object",
              "required" : true
            },
            "status" : {
              "enum" : [
                "publish",
                "future",
                "draft",
                "pending",
                "private",
                "acf-disabled"
              ],
              "required" : true,
              "description" : "A named status for the object.",
              "type" : "string"
            },
            "post" : {
              "description" : "The ID for the associated post of the attachment.",
              "type" : "integer",
              "required" : true
            }
          }
        },
        {
          "methods" : [
            "DELETE"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the object.",
              "type" : "integer",
              "required" : true
            },
            "force" : {
              "default" : true,
              "required" : true,
              "description" : "Whether to bypass trash and force deletion.",
              "type" : "boolean"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/block-renderer\/(?P<name>jetpack\/gif)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for jetpack\/gif block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/jetpack\/v4\/connection\/user" : {
      "endpoints" : [
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "POST",
        "PUT",
        "PATCH"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/connection\/user"
      }
    },
    "\/wpcom\/v2\/mailchimp\/groups" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "wpcom\/v2",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wpcom\/v2\/mailchimp\/groups"
      }
    },
    "\/wp\/v2\/pages\/(?P<id>[\\d]+)\/autosaves" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "parent" : {
              "description" : "The ID for the parent of the object.",
              "type" : "integer",
              "required" : true
            }
          }
        },
        {
          "methods" : [
            "POST"
          ],
          "args" : {
            "template" : {
              "description" : "The theme file to use to display the object.",
              "type" : "string",
              "required" : true
            },
            "excerpt" : {
              "description" : "The excerpt for the object.",
              "type" : "object",
              "required" : true
            },
            "date_gmt" : {
              "description" : "The date the object was published, as GMT.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "author" : {
              "description" : "The ID for the author of the object.",
              "type" : "integer",
              "required" : true
            },
            "parent" : {
              "description" : "The ID for the parent of the object.",
              "type" : "integer",
              "required" : true
            },
            "comment_status" : {
              "enum" : [
                "open",
                "closed"
              ],
              "required" : true,
              "description" : "Whether or not comments are open on the object.",
              "type" : "string"
            },
            "menu_order" : {
              "description" : "The order of the object in relation to other object of its type.",
              "type" : "integer",
              "required" : true
            },
            "ping_status" : {
              "enum" : [
                "open",
                "closed"
              ],
              "required" : true,
              "description" : "Whether or not the object can be pinged.",
              "type" : "string"
            },
            "title" : {
              "description" : "The title for the object.",
              "type" : "object",
              "required" : true
            },
            "date" : {
              "description" : "The date the object was published, in the site's timezone.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "password" : {
              "description" : "A password to protect access to the content and excerpt.",
              "type" : "string",
              "required" : true
            },
            "slug" : {
              "description" : "An alphanumeric identifier for the object unique to its type.",
              "type" : "string",
              "required" : true
            },
            "featured_media" : {
              "description" : "The ID of the featured media for the object.",
              "type" : "integer",
              "required" : true
            },
            "meta" : {
              "description" : "Meta fields.",
              "type" : "object",
              "required" : true
            },
            "status" : {
              "enum" : [
                "publish",
                "future",
                "draft",
                "pending",
                "private",
                "acf-disabled"
              ],
              "required" : true,
              "description" : "A named status for the object.",
              "type" : "string"
            },
            "content" : {
              "description" : "The content for the object.",
              "type" : "object",
              "required" : true
            }
          }
        }
      ]
    },
    "\/wp\/v2\/tags" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "orderby" : {
              "default" : "name",
              "enum" : [
                "id",
                "include",
                "name",
                "slug",
                "include_slugs",
                "term_group",
                "description",
                "count"
              ],
              "required" : true,
              "description" : "Sort collection by term attribute.",
              "type" : "string"
            },
            "hide_empty" : {
              "default" : true,
              "required" : true,
              "description" : "Whether to hide terms not assigned to any posts.",
              "type" : "boolean"
            },
            "include" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to specific IDs.",
              "type" : "array"
            },
            "per_page" : {
              "default" : 10,
              "required" : true,
              "description" : "Maximum number of items to be returned in result set.",
              "type" : "integer"
            },
            "offset" : {
              "description" : "Offset the result set by a specific number of items.",
              "type" : "integer",
              "required" : true
            },
            "order" : {
              "default" : "asc",
              "enum" : [
                "asc",
                "desc"
              ],
              "required" : true,
              "description" : "Order sort attribute ascending or descending.",
              "type" : "string"
            },
            "search" : {
              "description" : "Limit results to those matching a string.",
              "type" : "string",
              "required" : true
            },
            "page" : {
              "default" : 1,
              "required" : true,
              "description" : "Current page of the collection.",
              "type" : "integer"
            },
            "exclude" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Ensure result set excludes specific IDs.",
              "type" : "array"
            },
            "slug" : {
              "items" : {
                "type" : "string"
              },
              "required" : true,
              "description" : "Limit result set to terms with one or more specific slugs.",
              "type" : "array"
            },
            "post" : {
              "description" : "Limit result set to terms assigned to a specific post.",
              "type" : "integer",
              "required" : true
            }
          }
        },
        {
          "methods" : [
            "POST"
          ],
          "args" : {
            "meta" : {
              "description" : "Meta fields.",
              "type" : "object",
              "required" : true
            },
            "slug" : {
              "description" : "An alphanumeric identifier for the term unique to its type.",
              "type" : "string",
              "required" : true
            },
            "description" : {
              "description" : "HTML description of the term.",
              "type" : "string",
              "required" : true
            },
            "name" : {
              "description" : "HTML title for the term.",
              "type" : "string",
              "required" : true
            }
          }
        }
      ],
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wp\/v2\/tags"
      }
    },
    "\/wp\/v2\/block-renderer\/(?P<name>jetpack\/revue)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for jetpack\/revue block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/jetpack\/v4\/products" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/products"
      }
    },
    "\/" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "context" : {
              "default" : "view",
              "required" : true
            }
          }
        }
      ],
      "namespace" : "",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/"
      }
    },
    "\/wpcom\/v2\/mailchimp" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "wpcom\/v2",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wpcom\/v2\/mailchimp"
      }
    },
    "\/wp\/v2\/posts\/(?P<parent>[\\d]+)\/revisions\/(?P<id>[\\d]+)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "DELETE"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the object.",
              "type" : "integer",
              "required" : true
            },
            "parent" : {
              "description" : "The ID for the parent of the object.",
              "type" : "integer",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            }
          }
        },
        {
          "methods" : [
            "DELETE"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the object.",
              "type" : "integer",
              "required" : true
            },
            "parent" : {
              "description" : "The ID for the parent of the object.",
              "type" : "integer",
              "required" : true
            },
            "force" : {
              "default" : true,
              "required" : true,
              "description" : "Required to be true, as revisions do not support trashing.",
              "type" : "boolean"
            }
          }
        }
      ]
    },
    "\/jetpack\/v4\/rewind" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/rewind"
      }
    },
    "\/jetpack\/v4\/site\/features" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/site\/features"
      }
    },
    "\/wp\/v2\/jp_pay_order\/(?P<id>[\\d]+)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the object.",
              "type" : "integer",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "password" : {
              "description" : "The password for the post if it is password protected.",
              "type" : "string",
              "required" : true
            }
          }
        },
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : {
            "slug" : {
              "description" : "An alphanumeric identifier for the object unique to its type.",
              "type" : "string",
              "required" : true
            },
            "date_gmt" : {
              "description" : "The date the object was published, as GMT.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "status" : {
              "enum" : [
                "publish",
                "future",
                "draft",
                "pending",
                "private",
                "acf-disabled"
              ],
              "required" : true,
              "description" : "A named status for the object.",
              "type" : "string"
            },
            "id" : {
              "description" : "Unique identifier for the object.",
              "type" : "integer",
              "required" : true
            },
            "password" : {
              "description" : "A password to protect access to the content and excerpt.",
              "type" : "string",
              "required" : true
            },
            "excerpt" : {
              "description" : "The excerpt for the object.",
              "type" : "object",
              "required" : true
            },
            "date" : {
              "description" : "The date the object was published, in the site's timezone.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "meta" : {
              "description" : "Meta fields.",
              "type" : "object",
              "required" : true
            },
            "template" : {
              "description" : "The theme file to use to display the object.",
              "type" : "string",
              "required" : true
            }
          }
        },
        {
          "methods" : [
            "DELETE"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the object.",
              "type" : "integer",
              "required" : true
            },
            "force" : {
              "default" : true,
              "required" : true,
              "description" : "Whether to bypass trash and force deletion.",
              "type" : "boolean"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/types" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            }
          }
        }
      ],
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wp\/v2\/types"
      }
    },
    "\/oembed\/1.0" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "namespace" : {
              "default" : "oembed\/1.0",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "required" : true
            }
          }
        }
      ],
      "namespace" : "oembed\/1.0",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/oembed\/1.0"
      }
    },
    "\/wp\/v2\/taxonomies\/(?P<taxonomy>[\\w-]+)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "taxonomy" : {
              "description" : "An alphanumeric identifier for the taxonomy.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            }
          }
        }
      ]
    },
    "\/jetpack\/v4\/settings" : {
      "endpoints" : [
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : {
            "jetpack_testimonial_posts_per_page" : {
              "default" : 10,
              "required" : true,
              "description" : "Number of entries to show at most in Testimonial pages.",
              "type" : "integer"
            },
            "jetpack_sso_match_by_email" : {
              "default" : 0,
              "required" : true,
              "description" : "Match by Email",
              "type" : "boolean"
            },
            "wordpress_api_key" : {
              "default" : "",
              "required" : true,
              "description" : "",
              "type" : "string"
            },
            "blog_id" : {
              "default" : 0,
              "required" : true,
              "description" : "Blog ID.",
              "type" : "boolean"
            },
            "seo-tools" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "lang_id" : {
              "default" : "en_US",
              "required" : true,
              "description" : "Primary language for the site.",
              "type" : "string"
            },
            "jetpack_portfolio" : {
              "default" : 0,
              "required" : true,
              "description" : "Enable or disable Jetpack portfolio post type.",
              "type" : "boolean"
            },
            "stc_enabled" : {
              "default" : 1,
              "required" : true,
              "description" : "Show a &lt;em&gt;&#039;follow comments&#039;&lt;\/em&gt; option in the comment form",
              "type" : "boolean"
            },
            "sharing_delete_service" : {
              "default" : "",
              "required" : true,
              "description" : "Delete custom sharing service.",
              "type" : "string"
            },
            "copy-post" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "count_roles" : {
              "default" : [
                "administrator"
              ],
              "items" : {
                "type" : "string"
              },
              "required" : true,
              "description" : "Count the page views of registered users who are logged in.",
              "type" : "array"
            },
            "dismiss_empty_stats_card" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "custom-css" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "verification-tools" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "jetpack_comment_form_color_scheme" : {
              "default" : "light",
              "enum" : [
                "light",
                "dark",
                "transparent"
              ],
              "required" : true,
              "description" : "Color scheme",
              "type" : "string"
            },
            "carousel_display_exif" : {
              "default" : 0,
              "required" : true,
              "description" : "Show photo metadata (<a href=\"https:\/\/en.wikipedia.org\/wiki\/Exchangeable_image_file_format\" target=\"_blank\">Exif<\/a>) in carousel, when available.",
              "type" : "boolean"
            },
            "post-by-email" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "publicize" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "custom" : {
              "default" : {
                "sharing_name" : "",
                "sharing_url" : "",
                "sharing_icon" : ""
              },
              "required" : true,
              "description" : "Custom sharing services added by user.",
              "type" : "object"
            },
            "sso" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "version" : {
              "default" : 9,
              "required" : true,
              "description" : "Version.",
              "type" : "integer"
            },
            "highlander_comment_form_prompt" : {
              "default" : "Leave a Reply",
              "required" : true,
              "description" : "Greeting Text",
              "type" : "string"
            },
            "dismiss_dash_app_card" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "subscriptions" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "wordads_display_page" : {
              "default" : 1,
              "required" : true,
              "description" : "Display ads on pages?",
              "type" : "boolean"
            },
            "wordads_display_archive" : {
              "default" : 1,
              "required" : true,
              "description" : "Display ads on archive pages?",
              "type" : "boolean"
            },
            "bing" : {
              "default" : "",
              "required" : true,
              "description" : "Bing Webmaster Center",
              "type" : "string"
            },
            "button_style" : {
              "default" : "icon",
              "enum" : [
                "icon-text",
                "icon",
                "text",
                "official"
              ],
              "required" : true,
              "description" : "Button Style",
              "type" : "string"
            },
            "admin_bar" : {
              "default" : 1,
              "required" : true,
              "description" : "Include a small chart in your admin bar with a 48-hour traffic snapshot.",
              "type" : "boolean"
            },
            "json-api" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "stats" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "sharing_services" : {
              "default" : {
                "visible" : [
                  "twitter",
                  "facebook",
                  "google-plus-1"
                ],
                "hidden" : [

                ]
              },
              "required" : true,
              "description" : "Enabled Services and those hidden behind a button",
              "type" : "object"
            },
            "social_notifications_subscribe" : {
              "default" : 0,
              "required" : true,
              "description" : "Send email notification when someone follows my blog",
              "type" : "boolean"
            },
            "infinite-scroll" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "latex" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "wpcom_publish_comments_with_markdown" : {
              "default" : 0,
              "required" : true,
              "description" : "Use Markdown for comments.",
              "type" : "boolean"
            },
            "wordads_second_belowpost" : {
              "default" : 1,
              "required" : true,
              "description" : "Display second ad below post?",
              "type" : "boolean"
            },
            "do_not_track" : {
              "default" : 1,
              "required" : true,
              "description" : "Do not track.",
              "type" : "boolean"
            },
            "enable_header_ad" : {
              "default" : 1,
              "required" : true,
              "description" : "Display an ad unit at the top of each page.",
              "type" : "boolean"
            },
            "jetpack_sso_require_two_step" : {
              "default" : 0,
              "required" : true,
              "description" : "Require Two-Step Authentication",
              "type" : "boolean"
            },
            "enhanced-distribution" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "carousel_background_color" : {
              "default" : "black",
              "enum" : [
                "black",
                "white"
              ],
              "required" : true,
              "description" : "Color scheme.",
              "type" : "string"
            },
            "google-analytics" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "jetpack_protect_global_whitelist" : {
              "default" : "",
              "required" : true,
              "description" : "Protect global whitelist",
              "type" : "string"
            },
            "gravatar-hovercards" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "photon-cdn" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "comment-likes" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "post_by_email_address" : {
              "default" : "noop",
              "enum" : [
                "noop",
                "create",
                "regenerate",
                "delete"
              ],
              "required" : true,
              "description" : "Email Address",
              "type" : "string"
            },
            "gravatar_disable_hovercards" : {
              "default" : "enabled",
              "enum" : [
                "enabled",
                "disabled"
              ],
              "required" : true,
              "description" : "View people&#039;s profiles when you mouse over their Gravatars",
              "type" : "string"
            },
            "jetpack-twitter-cards-site-tag" : {
              "default" : "",
              "required" : true,
              "description" : "The Twitter username of the owner of this site&#039;s domain.",
              "type" : "string"
            },
            "infinite_scroll" : {
              "default" : 1,
              "required" : true,
              "description" : "To infinity and beyond",
              "type" : "boolean"
            },
            "show_headline" : {
              "default" : 1,
              "required" : true,
              "description" : "Highlight related content with a heading",
              "type" : "boolean"
            },
            "wordads" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "markdown" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "tiled_galleries" : {
              "default" : 0,
              "required" : true,
              "description" : "Display all your gallery pictures in a cool mosaic.",
              "type" : "boolean"
            },
            "monitor_receive_notifications" : {
              "default" : 0,
              "required" : true,
              "description" : "Receive Monitor Email Notifications.",
              "type" : "boolean"
            },
            "social_notifications_like" : {
              "default" : 1,
              "required" : true,
              "description" : "Send email notification when someone likes a post",
              "type" : "boolean"
            },
            "related-posts" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "wordads_display_front_page" : {
              "default" : 1,
              "required" : true,
              "description" : "Display ads on the front page?",
              "type" : "boolean"
            },
            "hide_smile" : {
              "default" : 1,
              "required" : true,
              "description" : "Hide the stats smiley face image.",
              "type" : "boolean"
            },
            "custom-content-types" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "wpl_default" : {
              "default" : "on",
              "enum" : [
                "on",
                "off"
              ],
              "required" : true,
              "description" : "WordPress.com Likes are",
              "type" : "string"
            },
            "sharedaddy_disable_resources" : {
              "default" : 0,
              "required" : true,
              "description" : "Disable CSS and JS",
              "type" : "boolean"
            },
            "yandex" : {
              "default" : "",
              "required" : true,
              "description" : "Yandex Site Verification",
              "type" : "string"
            },
            "context" : {
              "default" : "edit",
              "required" : true
            },
            "jetpack_protect_key" : {
              "default" : "",
              "required" : true,
              "description" : "Protect API key",
              "type" : "string"
            },
            "google" : {
              "default" : "",
              "required" : true,
              "description" : "Google Search Console",
              "type" : "string"
            },
            "wordads_display_post" : {
              "default" : 1,
              "required" : true,
              "description" : "Display ads on posts?",
              "type" : "boolean"
            },
            "google_analytics_tracking_id" : {
              "default" : "",
              "required" : true,
              "description" : "Google Analytics",
              "type" : "string"
            },
            "widgets" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "search" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "wpcom_publish_posts_with_markdown" : {
              "default" : 0,
              "required" : true,
              "description" : "Use Markdown for posts.",
              "type" : "boolean"
            },
            "carousel" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "likes" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "widget-visibility" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "stb_enabled" : {
              "default" : 1,
              "required" : true,
              "description" : "Show a &lt;em&gt;&#039;follow blog&#039;&lt;\/em&gt; option in the comment form",
              "type" : "boolean"
            },
            "notes" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "jetpack_portfolio_posts_per_page" : {
              "default" : 10,
              "required" : true,
              "description" : "Number of entries to show at most in Portfolio pages.",
              "type" : "integer"
            },
            "protect" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "akismet_show_user_comments_approved" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "shortlinks" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "jetpack_testimonial" : {
              "default" : 0,
              "required" : true,
              "description" : "Enable or disable Jetpack testimonial post type.",
              "type" : "boolean"
            },
            "photon" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "masterbar" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "videopress" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "shortcodes" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "wordads_custom_adstxt" : {
              "default" : "",
              "required" : true,
              "description" : "Custom ads.txt entries",
              "type" : "string"
            },
            "sharedaddy" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "show" : {
              "default" : [
                "post"
              ],
              "items" : {
                "type" : "string"
              },
              "required" : true,
              "description" : "Views where buttons are shown",
              "type" : "array"
            },
            "lazy-images" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "comments" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "sharing_label" : {
              "default" : "",
              "required" : true,
              "description" : "Sharing Label",
              "type" : "string"
            },
            "show_thumbnails" : {
              "default" : 0,
              "required" : true,
              "description" : "Show a thumbnail image where available",
              "type" : "boolean"
            },
            "monitor" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "onboarding" : {
              "default" : {
                "businessAddress" : {
                  "state" : "",
                  "street" : "",
                  "name" : "",
                  "city" : "",
                  "zip" : ""
                },
                "homepageFormat" : "posts",
                "siteDescription" : "",
                "installWooCommerce" : true,
                "siteType" : "personal",
                "siteTitle" : "",
                "addContactForm" : 0
              },
              "required" : true,
              "description" : "",
              "type" : "object"
            },
            "pinterest" : {
              "default" : "",
              "required" : true,
              "description" : "Pinterest Site Verification",
              "type" : "string"
            },
            "wordads_approved" : {
              "default" : 0,
              "required" : true,
              "description" : "Is site approved for WordAds?",
              "type" : "boolean"
            },
            "roles" : {
              "default" : [
                "administrator"
              ],
              "items" : {
                "type" : "string"
              },
              "required" : true,
              "description" : "Select the roles that will be able to view stats reports.",
              "type" : "array"
            },
            "contact-form" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "infinite_scroll_google_analytics" : {
              "default" : 0,
              "required" : true,
              "description" : "Use Google Analytics with Infinite Scroll",
              "type" : "boolean"
            },
            "tiled-gallery" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            },
            "vaultpress" : {
              "default" : 0,
              "required" : true,
              "description" : "",
              "type" : "boolean"
            }
          }
        },
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "POST",
        "PUT",
        "PATCH",
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/settings"
      }
    },
    "\/wp\/v2\/categories" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "orderby" : {
              "default" : "name",
              "enum" : [
                "id",
                "include",
                "name",
                "slug",
                "include_slugs",
                "term_group",
                "description",
                "count"
              ],
              "required" : true,
              "description" : "Sort collection by term attribute.",
              "type" : "string"
            },
            "hide_empty" : {
              "default" : true,
              "required" : true,
              "description" : "Whether to hide terms not assigned to any posts.",
              "type" : "boolean"
            },
            "parent" : {
              "description" : "Limit result set to terms assigned to a specific parent.",
              "type" : "integer",
              "required" : true
            },
            "include" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to specific IDs.",
              "type" : "array"
            },
            "per_page" : {
              "default" : 10,
              "required" : true,
              "description" : "Maximum number of items to be returned in result set.",
              "type" : "integer"
            },
            "order" : {
              "default" : "asc",
              "enum" : [
                "asc",
                "desc"
              ],
              "required" : true,
              "description" : "Order sort attribute ascending or descending.",
              "type" : "string"
            },
            "slug" : {
              "items" : {
                "type" : "string"
              },
              "required" : true,
              "description" : "Limit result set to terms with one or more specific slugs.",
              "type" : "array"
            },
            "search" : {
              "description" : "Limit results to those matching a string.",
              "type" : "string",
              "required" : true
            },
            "page" : {
              "default" : 1,
              "required" : true,
              "description" : "Current page of the collection.",
              "type" : "integer"
            },
            "exclude" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Ensure result set excludes specific IDs.",
              "type" : "array"
            },
            "post" : {
              "description" : "Limit result set to terms assigned to a specific post.",
              "type" : "integer",
              "required" : true
            }
          }
        },
        {
          "methods" : [
            "POST"
          ],
          "args" : {
            "meta" : {
              "description" : "Meta fields.",
              "type" : "object",
              "required" : true
            },
            "slug" : {
              "description" : "An alphanumeric identifier for the term unique to its type.",
              "type" : "string",
              "required" : true
            },
            "description" : {
              "description" : "HTML description of the term.",
              "type" : "string",
              "required" : true
            },
            "name" : {
              "description" : "HTML title for the term.",
              "type" : "string",
              "required" : true
            },
            "parent" : {
              "description" : "The parent term ID.",
              "type" : "integer",
              "required" : true
            }
          }
        }
      ],
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wp\/v2\/categories"
      }
    },
    "\/jetpack\/v4\/options\/(?P<options>[a-z\\-]+)" : {
      "namespace" : "jetpack\/v4",
      "methods" : [
        "POST",
        "PUT",
        "PATCH"
      ],
      "endpoints" : [
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : [

          ]
        }
      ]
    },
    "\/wp\/v2\/block-renderer\/(?P<name>jetpack\/repeat-visitor)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for jetpack\/repeat-visitor block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/jetpack\/v4\/plugins" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/plugins"
      }
    },
    "\/wp\/v2\/blocks\/(?P<id>[\\d]+)\/autosaves" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "parent" : {
              "description" : "The ID for the parent of the object.",
              "type" : "integer",
              "required" : true
            }
          }
        },
        {
          "methods" : [
            "POST"
          ],
          "args" : {
            "parent" : {
              "description" : "The ID for the parent of the object.",
              "type" : "integer",
              "required" : true
            },
            "date_gmt" : {
              "description" : "The date the object was published, as GMT.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "slug" : {
              "description" : "An alphanumeric identifier for the object unique to its type.",
              "type" : "string",
              "required" : true
            },
            "status" : {
              "enum" : [
                "publish",
                "future",
                "draft",
                "pending",
                "private",
                "acf-disabled"
              ],
              "required" : true,
              "description" : "A named status for the object.",
              "type" : "string"
            },
            "password" : {
              "description" : "A password to protect access to the content and excerpt.",
              "type" : "string",
              "required" : true
            },
            "title" : {
              "description" : "The title for the object.",
              "type" : "object",
              "required" : true
            },
            "date" : {
              "description" : "The date the object was published, in the site's timezone.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "content" : {
              "description" : "The content for the object.",
              "type" : "object",
              "required" : true
            },
            "template" : {
              "description" : "The theme file to use to display the object.",
              "type" : "string",
              "required" : true
            }
          }
        }
      ]
    },
    "\/jetpack\/v4\/verify-site\/(?P<service>[a-z\\-_]+)\/(?<keyring_id>[0-9]+)" : {
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ]
    },
    "\/jetpack\/v4\/plans" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/plans"
      }
    },
    "\/wp\/v2\/block-renderer\/(?P<name>core\/archives)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for core\/archives block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/block-renderer\/(?P<name>core\/rss)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for core\/rss block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/pages\/(?P<parent>[\\d]+)\/revisions" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "parent" : {
              "description" : "The ID for the parent of the object.",
              "type" : "integer",
              "required" : true
            },
            "per_page" : {
              "description" : "Maximum number of items to be returned in result set.",
              "type" : "integer",
              "required" : true
            },
            "search" : {
              "description" : "Limit results to those matching a string.",
              "type" : "string",
              "required" : true
            },
            "offset" : {
              "description" : "Offset the result set by a specific number of items.",
              "type" : "integer",
              "required" : true
            },
            "order" : {
              "default" : "desc",
              "enum" : [
                "asc",
                "desc"
              ],
              "required" : true,
              "description" : "Order sort attribute ascending or descending.",
              "type" : "string"
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "orderby" : {
              "default" : "date",
              "enum" : [
                "date",
                "id",
                "include",
                "relevance",
                "slug",
                "include_slugs",
                "title"
              ],
              "required" : true,
              "description" : "Sort collection by object attribute.",
              "type" : "string"
            },
            "include" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to specific IDs.",
              "type" : "array"
            },
            "page" : {
              "default" : 1,
              "required" : true,
              "description" : "Current page of the collection.",
              "type" : "integer"
            },
            "exclude" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Ensure result set excludes specific IDs.",
              "type" : "array"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/blocks" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "before" : {
              "description" : "Limit response to posts published before a given ISO8601 compliant date.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "orderby" : {
              "default" : "date",
              "enum" : [
                "author",
                "date",
                "id",
                "include",
                "modified",
                "parent",
                "relevance",
                "slug",
                "include_slugs",
                "title"
              ],
              "required" : true,
              "description" : "Sort collection by object attribute.",
              "type" : "string"
            },
            "include" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to specific IDs.",
              "type" : "array"
            },
            "per_page" : {
              "default" : 10,
              "required" : true,
              "description" : "Maximum number of items to be returned in result set.",
              "type" : "integer"
            },
            "offset" : {
              "description" : "Offset the result set by a specific number of items.",
              "type" : "integer",
              "required" : true
            },
            "after" : {
              "description" : "Limit response to posts published after a given ISO8601 compliant date.",
              "type" : "string",
              "required" : true
            },
            "search" : {
              "description" : "Limit results to those matching a string.",
              "type" : "string",
              "required" : true
            },
            "page" : {
              "default" : 1,
              "required" : true,
              "description" : "Current page of the collection.",
              "type" : "integer"
            },
            "exclude" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Ensure result set excludes specific IDs.",
              "type" : "array"
            },
            "order" : {
              "default" : "desc",
              "enum" : [
                "asc",
                "desc"
              ],
              "required" : true,
              "description" : "Order sort attribute ascending or descending.",
              "type" : "string"
            },
            "slug" : {
              "items" : {
                "type" : "string"
              },
              "required" : true,
              "description" : "Limit result set to posts with one or more specific slugs.",
              "type" : "array"
            },
            "status" : {
              "default" : "publish",
              "items" : {
                "type" : "string",
                "enum" : [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "trash",
                  "auto-draft",
                  "inherit",
                  "request-pending",
                  "request-confirmed",
                  "request-failed",
                  "request-completed",
                  "acf-disabled",
                  "any"
                ]
              },
              "required" : true,
              "description" : "Limit result set to posts assigned one or more statuses.",
              "type" : "array"
            }
          }
        },
        {
          "methods" : [
            "POST"
          ],
          "args" : {
            "slug" : {
              "description" : "An alphanumeric identifier for the object unique to its type.",
              "type" : "string",
              "required" : true
            },
            "date_gmt" : {
              "description" : "The date the object was published, as GMT.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "status" : {
              "enum" : [
                "publish",
                "future",
                "draft",
                "pending",
                "private",
                "acf-disabled"
              ],
              "required" : true,
              "description" : "A named status for the object.",
              "type" : "string"
            },
            "password" : {
              "description" : "A password to protect access to the content and excerpt.",
              "type" : "string",
              "required" : true
            },
            "content" : {
              "description" : "The content for the object.",
              "type" : "object",
              "required" : true
            },
            "title" : {
              "description" : "The title for the object.",
              "type" : "object",
              "required" : true
            },
            "date" : {
              "description" : "The date the object was published, in the site's timezone.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "template" : {
              "description" : "The theme file to use to display the object.",
              "type" : "string",
              "required" : true
            }
          }
        }
      ],
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wp\/v2\/blocks"
      }
    },
    "\/wpcom\/v2\/publicize\/connection-test-results" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "wpcom\/v2",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wpcom\/v2\/publicize\/connection-test-results"
      }
    },
    "\/jetpack\/v4\/site\/purchases" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/site\/purchases"
      }
    },
    "\/jetpack\/v4\/tracking\/settings" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        },
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : {
            "tracks_opt_out" : {
              "type" : "boolean",
              "required" : true
            }
          }
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET",
        "POST",
        "PUT",
        "PATCH"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/tracking\/settings"
      }
    },
    "\/jetpack\/v4\/jitm" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        },
        {
          "methods" : [
            "POST"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET",
        "POST"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/jitm"
      }
    },
    "\/jetpack\/v4\/site\/activity" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/site\/activity"
      }
    },
    "\/wpcom\/v2\/memberships\/product" : {
      "endpoints" : [
        {
          "methods" : [
            "POST"
          ],
          "args" : {
            "currency" : {
              "type" : "string",
              "required" : true
            },
            "title" : {
              "type" : "string",
              "required" : true
            },
            "interval" : {
              "type" : "string",
              "required" : true
            },
            "price" : {
              "type" : "float",
              "required" : true
            }
          }
        }
      ],
      "namespace" : "wpcom\/v2",
      "methods" : [
        "POST"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wpcom\/v2\/memberships\/product"
      }
    },
    "\/wpcom\/v2\/resolve-redirect\/(?P<url>.+)" : {
      "namespace" : "wpcom\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "url" : {
              "description" : "The URL to check for redirects.",
              "type" : "string",
              "required" : true
            }
          }
        }
      ]
    },
    "\/jetpack\/v4\/hints" : {
      "endpoints" : [
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : {
            "hint" : {
              "default" : "",
              "type" : "string",
              "required" : true
            }
          }
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "POST",
        "PUT",
        "PATCH"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/hints"
      }
    },
    "\/wp\/v2\/block-renderer\/(?P<name>core\/shortcode)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for core\/shortcode block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/block-renderer\/(?P<name>core\/block)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for core\/block block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/taxonomies" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "type" : {
              "description" : "Limit results to taxonomies associated with a specific post type.",
              "type" : "string",
              "required" : true
            }
          }
        }
      ],
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wp\/v2\/taxonomies"
      }
    },
    "\/jetpack\/v4\/notice\/(?P<notice>[a-z\\-_]+)" : {
      "namespace" : "jetpack\/v4",
      "methods" : [
        "POST",
        "PUT",
        "PATCH"
      ],
      "endpoints" : [
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : [

          ]
        }
      ]
    },
    "\/wp\/v2\/posts\/(?P<parent>[\\d]+)\/revisions" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "parent" : {
              "description" : "The ID for the parent of the object.",
              "type" : "integer",
              "required" : true
            },
            "per_page" : {
              "description" : "Maximum number of items to be returned in result set.",
              "type" : "integer",
              "required" : true
            },
            "search" : {
              "description" : "Limit results to those matching a string.",
              "type" : "string",
              "required" : true
            },
            "offset" : {
              "description" : "Offset the result set by a specific number of items.",
              "type" : "integer",
              "required" : true
            },
            "order" : {
              "default" : "desc",
              "enum" : [
                "asc",
                "desc"
              ],
              "required" : true,
              "description" : "Order sort attribute ascending or descending.",
              "type" : "string"
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "orderby" : {
              "default" : "date",
              "enum" : [
                "date",
                "id",
                "include",
                "relevance",
                "slug",
                "include_slugs",
                "title"
              ],
              "required" : true,
              "description" : "Sort collection by object attribute.",
              "type" : "string"
            },
            "include" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Limit result set to specific IDs.",
              "type" : "array"
            },
            "page" : {
              "default" : 1,
              "required" : true,
              "description" : "Current page of the collection.",
              "type" : "integer"
            },
            "exclude" : {
              "default" : [

              ],
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "Ensure result set excludes specific IDs.",
              "type" : "array"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/block-renderer\/(?P<name>jetpack\/email)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for jetpack\/email block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/jetpack\/v4" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "namespace" : {
              "default" : "jetpack\/v4",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "required" : true
            }
          }
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4"
      }
    },
    "\/jetpack\/v4\/connection\/url" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/connection\/url"
      }
    },
    "\/wp\/v2\/block-renderer\/(?P<name>jetpack\/calendly)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for jetpack\/calendly block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/wpcom\/v2\/publicize\/services" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "wpcom\/v2",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wpcom\/v2\/publicize\/services"
      }
    },
    "\/wp\/v2\/posts\/(?P<id>[\\d]+)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the object.",
              "type" : "integer",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "view",
                "embed",
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "password" : {
              "description" : "The password for the post if it is password protected.",
              "type" : "string",
              "required" : true
            }
          }
        },
        {
          "methods" : [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args" : {
            "categories" : {
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "The terms assigned to the object in the category taxonomy.",
              "type" : "array"
            },
            "slug" : {
              "description" : "An alphanumeric identifier for the object unique to its type.",
              "type" : "string",
              "required" : true
            },
            "status" : {
              "enum" : [
                "publish",
                "future",
                "draft",
                "pending",
                "private",
                "acf-disabled"
              ],
              "required" : true,
              "description" : "A named status for the object.",
              "type" : "string"
            },
            "title" : {
              "description" : "The title for the object.",
              "type" : "object",
              "required" : true
            },
            "sticky" : {
              "description" : "Whether or not the object should be treated as sticky.",
              "type" : "boolean",
              "required" : true
            },
            "tags" : {
              "items" : {
                "type" : "integer"
              },
              "required" : true,
              "description" : "The terms assigned to the object in the post_tag taxonomy.",
              "type" : "array"
            },
            "comment_status" : {
              "enum" : [
                "open",
                "closed"
              ],
              "required" : true,
              "description" : "Whether or not comments are open on the object.",
              "type" : "string"
            },
            "jetpack_publicize_connections" : {
              "type" : "array",
              "items" : {
                "properties" : {
                  "done" : {
                    "readonly" : true,
                    "description" : "Whether Publicize has already finished sharing for this post",
                    "type" : "boolean",
                    "context" : [
                      "edit"
                    ]
                  },
                  "id" : {
                    "readonly" : true,
                    "description" : "Unique identifier for the Publicize Connection",
                    "type" : "string",
                    "context" : [
                      "view",
                      "edit"
                    ]
                  },
                  "display_name" : {
                    "readonly" : true,
                    "description" : "Username of the connected account",
                    "type" : "string",
                    "context" : [
                      "view",
                      "edit"
                    ]
                  },
                  "enabled" : {
                    "type" : "boolean",
                    "context" : [
                      "edit"
                    ],
                    "description" : "Whether to share to this connection"
                  },
                  "toggleable" : {
                    "readonly" : true,
                    "description" : "Whether `enable` can be changed for this post\/connection",
                    "type" : "boolean",
                    "context" : [
                      "edit"
                    ]
                  },
                  "service_name" : {
                    "readonly" : true,
                    "description" : "Alphanumeric identifier for the Publicize Service",
                    "type" : "string",
                    "context" : [
                      "view",
                      "edit"
                    ]
                  }
                },
                "title" : "jetpack-publicize-post-connection",
                "type" : "object",
                "$schema" : "http:\/\/json-schema.org\/draft-04\/schema#"
              },
              "required" : true
            },
            "template" : {
              "description" : "The theme file to use to display the object.",
              "type" : "string",
              "required" : true
            },
            "meta" : {
              "description" : "Meta fields.",
              "type" : "object",
              "required" : true
            },
            "id" : {
              "description" : "Unique identifier for the object.",
              "type" : "integer",
              "required" : true
            },
            "date" : {
              "description" : "The date the object was published, in the site's timezone.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "date_gmt" : {
              "description" : "The date the object was published, as GMT.",
              "type" : [
                "string",
                "null"
              ],
              "required" : true
            },
            "featured_media" : {
              "description" : "The ID of the featured media for the object.",
              "type" : "integer",
              "required" : true
            },
            "format" : {
              "enum" : [
                "standard",
                "aside",
                "chat",
                "gallery",
                "link",
                "image",
                "quote",
                "status",
                "video",
                "audio"
              ],
              "required" : true,
              "description" : "The format for the object.",
              "type" : "string"
            },
            "excerpt" : {
              "description" : "The excerpt for the object.",
              "type" : "object",
              "required" : true
            },
            "password" : {
              "description" : "A password to protect access to the content and excerpt.",
              "type" : "string",
              "required" : true
            },
            "ping_status" : {
              "enum" : [
                "open",
                "closed"
              ],
              "required" : true,
              "description" : "Whether or not the object can be pinged.",
              "type" : "string"
            },
            "content" : {
              "description" : "The content for the object.",
              "type" : "object",
              "required" : true
            },
            "author" : {
              "description" : "The ID for the author of the object.",
              "type" : "integer",
              "required" : true
            }
          }
        },
        {
          "methods" : [
            "DELETE"
          ],
          "args" : {
            "id" : {
              "description" : "Unique identifier for the object.",
              "type" : "integer",
              "required" : true
            },
            "force" : {
              "default" : true,
              "required" : true,
              "description" : "Whether to bypass trash and force deletion.",
              "type" : "boolean"
            }
          }
        }
      ]
    },
    "\/jetpack\/v4\/module\/all" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "jetpack\/v4",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/jetpack\/v4\/module\/all"
      }
    },
    "\/wp\/v2\/block-renderer\/(?P<name>jetpack\/slideshow)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for jetpack\/slideshow block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/wpcom\/v2\/business-hours\/localized-week" : {
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : [

          ]
        }
      ],
      "namespace" : "wpcom\/v2",
      "methods" : [
        "GET"
      ],
      "_links" : {
        "self" : "https:\/\/www.dnsec.net\/wp-json\/wpcom\/v2\/business-hours\/localized-week"
      }
    },
    "\/wp\/v2\/block-renderer\/(?P<name>jetpack\/tiled-gallery)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for jetpack\/tiled-gallery block",
              "type" : "object"
            }
          }
        }
      ]
    },
    "\/wp\/v2\/block-renderer\/(?P<name>core\/latest-comments)" : {
      "namespace" : "wp\/v2",
      "methods" : [
        "GET"
      ],
      "endpoints" : [
        {
          "methods" : [
            "GET"
          ],
          "args" : {
            "post_id" : {
              "description" : "ID of the post context.",
              "type" : "integer",
              "required" : true
            },
            "name" : {
              "description" : "Unique registered name for the block.",
              "type" : "string",
              "required" : true
            },
            "context" : {
              "default" : "view",
              "enum" : [
                "edit"
              ],
              "required" : true,
              "description" : "Scope under which the request is made; determines fields present in response.",
              "type" : "string"
            },
            "attributes" : {
              "default" : [

              ],
              "required" : true,
              "description" : "Attributes for core\/latest-comments block",
              "type" : "object"
            }
          }
        }
      ]
    }
  },
  "timezone_string" : "America\/New_York",
  "_links" : {
    "help" : [
      {
        "href" : "http:\/\/v2.wp-api.org\/"
      }
    ]
  },
  "home" : "https:\/\/www.dnsec.net",
  "namespaces" : [
    "oembed\/1.0",
    "jetpack\/v4",
    "wpcom\/v2",
    "wp\/v2"
  ],
  "authentication" : [

  ],
  "description" : "Apple news, app reviews, and stories by Federico Viticci and friends.",
  "gmt_offset" : -5,
  "name" : "PROTECTION RULES",
  "url" : "https:\/\/www.dnsec.net\/wp"
	}
