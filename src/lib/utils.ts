/*
* Replace multiple terms in the string by given object {key: value, ...} pair
*
* */
export function replaceByObject(str: string, obj: { [key: string]: any }): string {
   let key: string

   for (key in obj)
      str = str.replace(new RegExp('\\{' + key + '\\}', 'gm'), obj[key])

   return str.toString()
}

export function validateJSON(str: string) {
   try {
      const parsed = JSON.parse(str)

      return parsed instanceof Object || parsed instanceof Array ? parsed : false
   }
   catch (error) {
      return false
   }
}

export function isServerSide(): boolean {
   return typeof window === 'undefined'
}

export function trim(str: string, char: string): string {
   str = trimLeft(str, char)

   return trimRight(str, char)
}

export function trimLeft(str: string, char: string) {
   if (char === undefined)
      char = '\s'

   return str.replace(new RegExp('^[' + char + ']+'), '')
}

export function trimRight(str: string, char: string) {
   if (char === undefined)
      char = '\s'

   return str.replace(new RegExp('[' + char + ']+$'), '')
}