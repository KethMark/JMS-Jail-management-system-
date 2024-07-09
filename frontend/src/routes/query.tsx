import { useQuery } from "@tanstack/react-query"
import { inmateGET, visitorGET } from "../lib/api"

export const SingIn = () => {
  const {} = useQuery({
    queryKey: [""],
    queryFn: () => inmateGET(),
  })
}

export const Visitor = () => {

  const { data: status, isLoading } = useQuery({
    queryKey: ["Visitor"],
    queryFn: visitorGET
  })

  return { status, isLoading}
}

export const Inmate = () => {

  const { data: status, isLoading } = useQuery({
    queryKey: ["Inmate"],
    queryFn: inmateGET
  })

  return { status, isLoading}
}