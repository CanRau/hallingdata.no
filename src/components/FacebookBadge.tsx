import * as React from "react"

type Props = {}

export const FacebookBadge: React.SFC<Props> = (props: Props) => (
  <div
    dangerouslySetInnerHTML={{
      __html:
        '<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhallingdata&tabs&width=340&height=154&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="154" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
    }}
  />
)
