"external_entry",
    perform(op("initialize_stack")),
    assign("env", op("get_global_environment")),
    assign("continue", label("print_result")),
    go_to(reg("val")),